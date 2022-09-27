const axios = require('axios')

class API {
  constructor(url) {
    this.url = url || process.env.PROVIDER_BASE_URL
  }

  async getVehicle(id) {
    return axios.get(`${this.url}/vehicle/${id}`).then(r => r.data);
  }
}

module.exports = API