# copy SSL cert
cp ${CERT_DIR}/*.pem ${HOME}/cert/

# start database
mkdir -p ${HOME}/database
mkdir -p ${HOME}/database/data

docker run --name hicksmde_db \
        -e POSTGRES_PASSWORD=FSmyfoEXKqnp5d4qvuJeWesL2 \
        -e POSTGRES_USER=hicksmde \
        -e POSTGRES_DB=hicksmde_db \
        -e PGDATA=/var/lib/postgresql/data/pgdata \
        -v /${HOME}/database/data:/var/lib/postgresql/data \
        -d --restart=unless-stopped \
        --network=hicksmde-net --ip=192.0.2.2 \
        postgres

# run pyacct
docker run --name hicksmde_pyacct \
        -v /${HOME}/git/pyacct/src/pyacct/config/:/pyacct/src/pyacct/config/ \
        -v /${HOME}/cert/:/cert/ \
        -p 8000:8000 \
        -d --restart=unless-stopped \
        --network=hicksmde-net --ip=192.0.2.3 \
        pyacct --port 8000 --workers 1 \
        --ssl-certfile /cert/fullchain.pem --ssl-keyfile /cert/privkey.pem

# run authmail
docker run --name hicksmde_authmail \
        -v /${HOME}/git/authmail/src/authmail/config/:/authmail/src/authmail/config/ \
        -v /${HOME}/cert/:/cert/ \
        -p 8001:8000 \
        -d --restart=unless-stopped \
        --network=hicksmde-net --ip=192.0.2.4 \
        authmail --port 8000 --workers 1 \
        --ssl-certfile /cert/fullchain.pem --ssl-keyfile /cert/privkey.pem

# run hicksmde HTTP
docker run --name hicksmde \
        -v /${HOME}/git/hicksmde-mapping/config/:/hicksmde-mapping/config/ \
        -v /${HOME}/cert/:/cert/ \
        -p 443:8000 \
        -d --restart=unless-stopped \
        --network=hicksmde-net --ip=192.0.2.5 \
        hicksmde --port 8000 --workers 1 \
        --ssl-certfile /cert/fullchain.pem --ssl-keyfile /cert/privkey.pem

