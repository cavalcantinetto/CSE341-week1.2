const mongodb = require('../db/connect');

const getData = async(req, res, next) => {
    const result = await mongodb.getDb().db('professional').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); // we just need the first one (the only one)
        console.log(lists);
    });
};

module.exports = { getData };