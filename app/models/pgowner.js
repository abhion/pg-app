const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pgOwnerSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }

});
const PgOwner = mongoose.model('PgOwner', pgOwnerSchema);
module.exports = PgOwner;