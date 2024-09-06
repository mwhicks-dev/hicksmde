#!/bin/bash
cd ${HOME}/git/hicksmde-mapping/sh

git pull

./network.sh || true
sleep 1
./build.sh || true
sleep 1
./stop.sh || true
sleep 1
./rm.sh || true
sleep 1
./run.sh || true

cd -
