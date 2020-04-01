const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tenantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    adhar: {
        type: String,
        required: true
    },
    pan: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    roomId: {
        type: String
    },
    buildingId: {
        type: Schema.Types.ObjectId,
        ref: 'Building'
    },
    userId: {
        type: Schema.Types.ObjectId
    }

});
const Tenant = mongoose.model('Tenant', tenantSchema);
module.exports = Tenant;