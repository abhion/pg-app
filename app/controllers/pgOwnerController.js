const PgOwner = require('../models/pgowner');

module.exports.create = (req, res) => {
    const pgOwner = new PgOwner();
    pgOwner.save()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}
