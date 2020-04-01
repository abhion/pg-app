const Tenant = require('../models/tenant');

module.exports.create = (req, res) => {
    const tenant = new Tenant();
    tenant.save()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Tenant.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(newTenant => res.json(newTenant))
        .catch(err => res.json(err));
}

module.exports.list = (req, res) => {
    Tenant.find()
        .then(tenants => res.json(tenants))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id;
    Tenant.findById(id)
        .then(tenant => tenant ? res.json(tenants) : res.json({}))
        .catch(err => res.json(err))
}
module.exports.delete = (req, res) => {
    const id = req.params.id;
    Tenant.findByIdAndDelete(id)
        .then(tenant => tenant ? res.json(tenants) : res.json({}))
        .catch(err => res.json(err))
}
