const { Verifier } = require('@pact-foundation/pact')
const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')
const router = require('../router');
const { getById } = require('../repository');

jest.mock('../repository')

describe("Pact Verification", () => {
    let server
    beforeAll(() => {
        const app = express();
        app.use(bodyParser.json())
        app.use(router);
        server = app.listen(8080);
    })

    afterAll(async() => {
        await server.close()
    })

    it("validates the expectations of VehicleService", async () => {
        await new Verifier({
            logLevel: "INFO",
            provider: "VehicleService",
            providerVersion: "1.0.0",
            pactBrokerUrl: 'http://pact-broker.pushme.cloud:9292',
            consumerVersionSelectors: [{ latest: true }],
            stateHandlers: {
                'vehicle with ID 10 exists': () => {
                    getById.mockReturnValueOnce({
                        id: '10',
                        type: 'escooter',
                    })
                    return Promise.resolve()
                }
            },
            publishVerificationResult: process.env.PACT_PUBLISH === 'true',
            providerBaseUrl: 'http://localhost:8080',
        }).verifyProvider().catch(e => console.log(e))
    })
});