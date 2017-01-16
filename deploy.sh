#!/usr/bin/env bash

root=`pwd`
public=${root}/public
gh_pages=${root}/gh_pages

function xandeerPrepare() {
  [ -d ${public} ] || mkdir public
}

function xandeerBuild() {
  for arg in $1; do
    xandeerPrepare
    echo "Begining to build ${arg}"
    cd ${root}/${arg}
    npm install
    npm run deploy
    mv ${root}/${arg}/build ${public}/${arg}
    echo "Finish building ${arg}"
  done
}

function xandeerPush() {
  if [ -d ${public} ]; then
    git clone https://${GH_TOKEN}@${GH_REF} --branch=master ${gh_pages}
    cd ${gh_pages}
    git config user.name "xandeer"
    git config user.email "kkxandeer@gmail.com"
    git checkout master
    cp -a ${public}/* ${gh_pages}
    git add --all
    git commit -m "update $1"
    git push
  fi
}
