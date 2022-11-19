const db = require('../models');

const test = (req, res) => {
    res.json({message: 'Little Mix test API successful..'});
};

const create = (req, res) => {
    db.Singer.create(req.body, (err, createdSinger) => {
        if (err) return res.status(500).json({
            message: 'Something went wrong here..',
            error: err
        });
        res.json(createdSinger);
    });
};

module.exports = {
    test,
    create
};