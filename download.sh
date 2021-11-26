#!/bin/bash
url='https://papermc.io/api/v2/projects/paper'
version=$(curl -sSfL "$url"); version=${version%\"*} version=${version##*\"}
build=$(curl -sSfL "$url/versions/$version"); build=${build%]*} build=${build##*[,[]}
echo "Using version $version"
echo "Usind build number $build"
curl -sSfL "$url/versions/$version/builds/$build/downloads/paper-$version-$build.jar" -o ./paper.jar
