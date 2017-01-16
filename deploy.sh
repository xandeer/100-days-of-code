#!/usr/bin/env bash

root=`pwd`
public=${root}/public
gh_pages=${root}/gh_pages

function xandeerPrepare() {
  [ -d ${public} ] || mkdir public
}

function xandeerBuild() {
  for item in $1; do
    xandeerPrepare
    echo "Begining to build ${item}"
    cd ${root}/${item}
    npm install
    npm run deploy
    mv ${root}/${item}/build ${public}/${item}
    echo "Finish building ${item}"
  done
}

function xandeerPush() {
  if [ -d ${public} ]; then
    git clone https://${GH_TOKEN}@${GH_REF} --branch=master ${gh_pages}
    cd ${gh_pages}
    git config --global push.default simple
    git config user.name "xandeer"
    git config user.email "kkxandeer@gmail.com"
    for item in $1; do
      rm -rf ${gh_pages}/${item}
      mv ${public}/${item} ${gh_pages}
      git add --all
      git commit -m "update ${item}"
    done
    git push
  fi
}
