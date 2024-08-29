# Use this script to redeploy the containerized devsite to a host.
docker stop hicksmde
docker build --no-cache -t hicksmde --build-arg TARGET=dev .
docker run --name hicksmde --rm -d -p 80:80 hicksmde
