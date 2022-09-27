const API = require('./api')
const nock = require('nock')

describe('API', () => {

  it('get vehicle by id', async () => {
    // Arrange
    const vehicle = {
      id: '10',
      type: 'escooter',
    }
    nock(process.env.PROVIDER_BASE_URL)
      .get('/vehicle/10')
      .reply(200, vehicle)
    
    // Act
    const api = new API(process.env.PROVIDER_BASE_URL)
    const respVehicle = await api.getVehicle(10)

    // Assert
    expect(respVehicle).toEqual(vehicle);
  })
})