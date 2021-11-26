const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const Path = require('path') 

async function get_latest_version(url) {
    return new Promise((resolve) => {
        var version
        axios.get(url)
            .then(response => {
                version = response.data.versions[response.data.versions.length - 1]
                resolve(version)
            })
            .catch(error => {
                console.error(error)
                resolve(error)
            });
    })
}
async function get_latest_build(url, version) {
    return new Promise((resolve) => {
        axios.get(url + "/versions/" + version)
        .then(response => {
            resolve(response.data.builds[response.data.builds.length -1])
        })
    })
}
async function dowload_jar(url, version, build, path) {
    return new Promise((resolve, reject) => {
        const writer = fs.createWriteStream(path)
        return axios({
            method: 'get',
            url: url + "/versions/" + version +
            "/builds/" + build + "/downloads/paper-" + version +
             "-" + build + ".jar",
            responseType: 'stream',
        }).then(response => {
            response.data.pipe(writer)
            writer.on('finish', resolve)
            writer.on('error', reject)
        })
    })
}


(async () => {
    try {
        const path = core.getInput('path');
        var version = core.getInput('version');
        var build = core.getInput('build_number');
        // var version = 'latest';
        // var build = 'latest';
        const url = 'https://papermc.io/api/v2/projects/paper';
        await (async () => {
            return new Promise((resolve, reject) => {
                if (version === 'latest') {
                    get_latest_version(url).then(nVersion => {
                        version = nVersion
                        get_latest_build(url, version).then(nBuild => {
                            build = nBuild
                            resolve()
                        })
                    })
                } else if (build === 'latest') {
                    get_latest_build(url, version).then(nBuild => {
                        build = nBuild
                        resolve()
                    })
                } else {
                    resolve()
                }
            })
        })().then(
            () => {
                dowload_jar(url, version, build, path);
            }
        )
    } catch (e) {
        core.setFailed(e.message);
    }
})();