#!/usr/bin/env bash

function _add() {
  touch $1.js test/$1.test.js
}

_add $1
