# pact-yard

A basic contract testing setup for demonstration purposes.

## Environment setup

Essentials:

- [nvm](https://github.com/nvm-sh/nvm)
- [yarn](https://yarnpkg.com/)

You are ready to go if a version check looks like the following:

```bash
$ nvm --version
0.35.3
```

```bash
$ yarn --version
1.22.19
```

## The repo structure

### The Consumer

Lives in the `consumer` directory. You need to be in the correct directory to act on it. It has its own dependencies and npm scripts. 

The consumer is... consuming an API and "drives" the contract generation and publication.

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
yarn contract:publish
```

## The Provider

Lives in the `provider` directory. You need to be in the correct directory to act on it. It has its own dependencies and npm scripts. 

Serves an API. Responsible to verify the contract.

```bash
# Use the correct node version
nvm install

# Go to the consumer directory
cd provider

# Install dependencies
yarn

# Verify the already published contract
yarn test

# Publish the verification result
yarn contract:verify
```
