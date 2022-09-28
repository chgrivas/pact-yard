const router = require('express').Router()
const repository = require('./repository')

router.get("/vehicle/:id", (req, res) => {
  const vehicle = repository.getById(req.params.id);
  vehicle ? res.status(200).json(vehicle) : res.status(404).json({ message: "Vehicle not found" })
})

module.exports = router
