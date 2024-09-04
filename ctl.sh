# Use this script to redeploy the containerized devsite to a host.
docker build --no-cache -t hicksmde --build-arg TARGET=dev .
docker stop hicksmde
sleep 2.5  # ensure no overlap of container
docker run --name hicksmde --rm -d -p 80:80 hicksmde
