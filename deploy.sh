#!/usr/bin/env bash

ROOT=`pwd`
PUBLIC=${ROOT}/public
GH_PAGES=${ROOT}/gh_pages
# since calculator, replace 'build' with 'dist'
DIST_PATH=dist

function xandeerPrepare() {
  [ -d ${PUBLIC} ] || mkdir public
}

function xandeerBuild() {
  for item in $1; do
    xandeerPrepare
    echo "Begining to build ${item}"
    cd ${ROOT}/${item}
    npm install
    npm run deploy
    mv ${ROOT}/${item}/${DIST_PATH} ${PUBLIC}/${item}
    echo "Finish building ${item}"
  done
}

function xandeerPush() {
  if [ -d ${PUBLIC} ]; then
    git clone https://${GH_TOKEN}@${GH_REF} --branch=master ${GH_PAGES}
    cp -a ${ROOT}/*.md ${ROOT}/_config.yml ${GH_PAGES}
    cd ${GH_PAGES}
    git config --global push.default simple
    git config user.name "xandeer"
    git config user.email "kkxandeer@gmail.com"
    for item in $1; do
      rm -rf ${GH_PAGES}/${item}
      mv ${PUBLIC}/${item} ${GH_PAGES}
      git add --all
      git commit -m "update ${item}"
    done
    git push
  fi
}
