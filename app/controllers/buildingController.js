const Building = require('../models/building');

module.exports.create = (req, res) => {
    const building = new Building();
    building.save()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Building.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(newBuilding => res.json(newBuilding))
        .catch(err => res.json(err));
}

module.exports.list = (req, res) => {
    Building.find()
        .then(buildings => res.json(buildings))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id;
    Building.findById(id)
        .then(building => building ? res.json(buildings) : res.json({}))
        .catch(err => res.json(err))
}
