const vehicles = [
  {
    id: '1',
    type: 'escooter',
  },
  {
    id: '2',
    type: 'emoped',
  },
]

const getById = (id) => {
  return vehicles.find(v => v.id === id)
}

module.exports = {
  getById,
}