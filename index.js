const core = require('@actions/core')
const github = require('@actions/github')

try {
    const path = core.getInput('path');
    const version = core.getInput('version');
    const build = core.getInput('build_number');

    console.log("Using version " + version + " and build number " + build)
} catch (e) {
    core.setFailed(e.message);
}