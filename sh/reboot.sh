${HOME}/git/hicksmde-mapping/network.sh || true
sleep 1
${HOME}/git/hicksmde-mapping/build.sh || true
sleep 1
${HOME}/git/hicksmde-mapping/stop.sh || true
sleep 1
${HOME}/git/hicksmde-mapping/rm.sh || true
sleep 1
${HOME}/git/hicksmde-mapping/run.sh || true

