#!/bin/bash
INITIAL_DIR=$(pwd)

mkdir -p ${HOME}/git
cd ${HOME}/git

if [ ! -d /$(pwd)/pyacct ]; then
        git clone https://github.com/mwhicks-dev/pyacct
else
        cd /$(pwd)/pyacct
        git pull
        cd -

fi

if [ ! -d /$(pwd)/authmail ]; then
        git clone https://github.com/mwhicks-dev/authmail
else
        cd /$(pwd)/authmail
        git pull
        cd -

fi


if [ ! -d /$(pwd)/hicksmde-mapping ]; then
        git clone https://github.com/mwhicks-dev/hicksmde-mapping
        cd /$(pwd)/hicksmde-mapping
        git submodule update --init --recursive
        cd -
else
        cd /$(pwd)/hicksmde-mapping
        git pull
        git submodule update --recursive --remote
        cd -

fi


# build latest pyacct with psycopg2
cd ${HOME}/git/pyacct && docker build --no-cache -t pyacct --build-arg DRIVER=psycopg2 .

# build latest authmail with config dependencies
cd ${HOME}/git/authmail && docker build --no-cache -t authmail .

# build latest hicksmde
cd ${HOME}/git/hicksmde-mapping && docker build --no-cache -t hicksmde .

cd $INITIAL_DIR

