#!/bin/sh
cp docs/.vuepress/scripts/updateBuildScript.js node_modules/@vuepress/core/lib/node/build/index.js
cp docs/.vuepress/scripts/addWorkerScript.js node_modules/@vuepress/core/lib/node/build/worker.js
vuepress build docs