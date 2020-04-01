const Amenity = require('../models/amenity');

module.exports.list = (req, res) => {
    Amenity.find()
        .then(amenity => res.json(amenity))
        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    const body = req.body;
    const amenityObj = new Amenity(body);
    amenityObj.save()
        .then(amenity => res.json(amenity))
        .catch(err => res.json(err));
}