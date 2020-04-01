const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buildingSchema = new Schema({
    name: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId
    },
    geo: {
        type: Object
    },
    buildingType: {
        type: String
    }

});
const Building = mongoose.model('Building', buildingSchema);
module.exports = Building;