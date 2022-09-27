const API = require('./api')
const nock = require('nock')

describe('API', () => {

  it('get vehicle by id', async () => {
    // Arrange
    const vehicle = {
      id: 10,
      type: 'escooter',
    }
    nock(API.BASE_URL)
      .get('/vehicle/10')
      .reply(200, vehicle)
    
    // Act
    const respVehicle = await API.getVehicle(10)

    // Assert
    expect(respVehicle).toEqual(vehicle);
  })
})