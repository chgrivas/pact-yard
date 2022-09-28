# pact-yard

A basic contract testing setup for demonstration purposes.

## Environment setup

Essential tools
- [nvm](https://github.com/nvm-sh/nvm)
- [yarn](https://yarnpkg.com/)

You are ready to go if a version check looks like the following examples:

```bash
$ nvm --version
0.35.3
```

```bash
$ yarn --version
1.22.19
```

## Modules

### The Consumer
Lives in `/consumer` directory. 

It expects an API to be served in order to be consumed safely. 

Drives the contract by generating it locally and publishing it to the broker.

```bash
# Use the correct node version
nvm install

# Go to the consumer directory
cd consumer

# Install dependencies
yarn

# Create the contract (pact/*.json)
yarn test

# Publish the contract
yarn test:pact:publish
```

## The Provider

Lives in `/provider` directory.

Serves an API. Responsible to verify the contract.

```bash
# Use the correct node version
nvm install

# Go to the consumer directory
cd provider

# Install dependencies
yarn

# Verify the already published contract
yarn test:pact

# Publish the verification result
yarn test:pact:publish
```
