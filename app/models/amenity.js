const mongoose = require('mongoose');
const Schema = new mongoose.Schema;

const amenitySchema = new Schema({
    name: {
        type: String
    }
});

const Amenity = mongoose.model("Amenity", amenitySchema);

module.exports = Amenity;
