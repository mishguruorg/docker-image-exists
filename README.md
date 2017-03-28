# docker-image-exists

Ever needed to check if a specific docker image has been published to Docker
Hub?

## Install

```
npm install -g docker-image-exists
```

## Usage

```
export DOCKER_USER=stayradiated
export DOCKER_PASSWORD=supersecretpassword

if [ docker-image-exists --quiet --repo stayradiated/dockerthing:2.0.0 ];
then
  echo Docker image exist!
else
  echo Need to create docker image!
fi
```
