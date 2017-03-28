import drc from 'docker-registry-client'
import program from 'commander'

import {version} from '../package.json'

program
  .version(version)
  .option('-q, --quiet', 'Do not print anything to console')
  .option('-r, --repo [repo]', 'Docker repo name (owner/name:tag)', '')
  .option('-u, --username [username]', 'Docker username', process.env.DOCKER_USER)
  .option('-p, --password [password]', 'Docker password', process.env.DOCKER_PASSWORD)
  .parse(process.argv)

if (typeof program.repo !== 'string' || program.repo.trim().length === 0) {
  throw new Error('You must specify --repo for docker-image-exists to work!')
}

const rar = drc.parseRepoAndRef(program.repo)

const client = drc.createClientV2({
  repo: rar,
  username: program.username,
  password: program.password,
})

const tagOrDigest = rar.tag || rar.digest

client.getManifest({ref: tagOrDigest}, (err) => {
  client.close()

  if (!program.quiet) {
    console.log(err || 'Docker images exists!')
  }

  process.exit(err ? 1 : 0)
})
