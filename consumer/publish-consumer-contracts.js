const pact = require('@pact-foundation/pact-node')
const path = require('path')

const opts = {
  pactFilesOrDirs: [path.resolve(__dirname, `./pacts`)],
  pactBroker: 'http://pact-broker.pushme.cloud:9292',
  tags: ['latest'],
  consumerVersion: `1.0.0`,
  timeout: 60000,
}

pact
  .publishPacts(opts)
  .then(() => console.log('Pact contract publishing complete!'))
  .catch(e => {
    console.log('Pact contract publishing failed: ', e)
    process.exit(1)
  })
