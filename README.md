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

## The pact broker

Find a shared pact broker here:

http://pact-broker.pushme.cloud:9292

It is up and running for the meetup demonstration and it will auto-explode before October 2022.

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

## Challenges

Here are some ideas that can be picked up and implemented:

1. Create a new consumer.
   - Naming is important. Find a cool, unique name!
   - The consumer should live in the same repository.
   - Push your consumer to master anytime.
   - The consumer should consume the `GET /vehicle/:id`.
   - The consumer ONLY cares about the vehicle's license plate.
   - Create a contract locally.
   - The contract should be published in the shared broker.
   - Make sure the contract is verified.
   
2. Enhance the consumer. You want to request a list of vehicles. Make sure it works. Do we have a pact?
   
3. You want to make sure that when the `GET /vehicle/:id` requests a vehicle that can not be found there is a message in the response. Create a pact for it in the existing consumer. Make sure it is verified.

4. Create a new consumer. Find a nice name for it (naming is important). It should live in the same repository and should consume the `GET /vehicle/:id`. It wants the response to be including the vehicle license plate. Publish your contract in the shared broker and make sure it is verified.

5. Create a new consumer. You want to request a list of vehicles but you only care that no vehicles is still an HTTP success. Create a pact for it?

Learn by doing!
