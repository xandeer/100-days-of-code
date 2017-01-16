#!/usr/bin/env bash

root=`pwd`
public=${root}/public
previous=${root}/previous

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
    git clone ${GH_REF} ${previous}
    cd ${previous}
    git config user.name "xandeer"
    git config user.email "kkxandeer@gmail.com"
    git checkout master
    mv ${public}/* ${previous}
    git add -A
    git commit -m "update $1"
    git push
  fi
}
