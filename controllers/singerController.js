const db = require('../models');

// Test Route
const test = (req, res) => {
    res.json({message: 'Little Mix test API successful..'});
};

// Create Route
const create = (req, res) => {
    db.Singer.create(req.body, (err, createdSinger) => {
        if (err) return res.status(500).json({
            message: 'Something went wrong here..',
            error: err
        });
        res.json(createdSinger);
    });
};

// Find Singer By NAme Route
const find = (req, res) => {
    db.Singer.findOne({name: req.body.name}, (err, foundSinger) => {
        if (err) return res.status(500).json({
            message: 'Something went wrong finding that singer..',
            error: err
        });
        res.json(foundSinger);
    });
};

const destroy = (req, res) => {
    db.Singer.deleteOne({hometown: req.body.hometown}, (err, deletedSinger) => {
        if (err) return res.status(500).json({
            message: 'Something went wrong finding that single singer..',
            error: err
        });
        res.json(deletedSinger);
    });
};

const destroyMany = (req, res) => {
    db.Singer.deleteMany({hometown: req.body.hometown}, (err, deletedSingers) => {
        if (err) return res.status(500).json({
            message: "Something went wrong finding those singers..",
            error: err,
        });
        res.json(deletedSingers);
    });
};


module.exports = {
    test,
    create,
    find,
    destroy,
    destroyMany
};