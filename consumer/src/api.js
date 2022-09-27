const axios = require('axios')

const BASE_URL = process.env.PROVIDER_BASE_URL

const getVehicle = async (id) => {
  return axios.get(`${BASE_URL}/vehicle/${id}`).then(r => r.data);
}

module.exports = { BASE_URL, getVehicle }