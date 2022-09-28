const path = require('path')
const { PactV3, MatchersV3, SpecificationVersion, } = require('@pact-foundation/pact')
const { eachLike, like } = MatchersV3;
const API = require('./api')

const provider = new PactV3({
  consumer: "WebApp",
  provider: "VehicleService",
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  logLevel: "warn",
  dir: path.resolve(process.cwd(), "pacts"),
  spec: SpecificationVersion.SPECIFICATION_VERSION_V2,
});

describe('API Pact test', () => {
  test('Vehicle 10 exists', async () => {
    // set up Pact interactions
    await provider.addInteraction({
      states: [{ description: 'vehicle with ID 10 exists' }],
      uponReceiving: 'get vehicle with ID 10',
      withRequest: {
        method: 'GET',
        path: '/vehicle/10',
      },
      willRespondWith: {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: like({
          id: '10',
          type: 'escooter',
        }),
      },
    })

    await provider.executeTest(async (mockService) => {
      const api = new API(mockService.url)

      // make request to Pact mock server
      const vehicle = await api.getVehicle('10');

      expect(vehicle).toStrictEqual({
        id: '10',
        type: 'escooter',
      })
    })
  })
})