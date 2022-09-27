const { getVehicle } = require('./api')

const vehicle = getVehicle(10).catch(e => console.log(e.message))