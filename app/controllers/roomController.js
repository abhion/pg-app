const Room = require('../models/room');

module.exports.create = (req, res) => {
    const room = new Room();
    room.save()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Room.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(newRoom => res.json(newRoom))
        .catch(err => res.json(err));
}

module.exports.list = (req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id;
    Room.findById(id)
        .then(room => room ? res.json(rooms) : res.json({}))
        .catch(err => res.json(err))
}
