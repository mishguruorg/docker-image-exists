# docker-image-exists

> Ever needed to check if a specific docker image has been published to Docker
Hub?

## Install

```
npm install -g docker-image-exists
```

## Usage

```
export DOCKER_USER=stayradiated
export DOCKER_PASSWORD=supersecretpassword

if docker-image-exists --quiet --repo stayradiated/dockerthing:2.0.0
then
  echo Docker image exist!
else
  echo Need to create docker image!
fi
```

## Options

```
Usage: docker-image-exists [options]

Options:

  -h, --help                 output usage information
  -V, --version              output the version number
  -q, --quiet                Do not print anything to console
  -r, --repo [repo]          Docker repo name (owner/name:tag)
  -u, --username [username]  Docker username
  -p, --password [password]  Docker password
```
