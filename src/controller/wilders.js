const { db } = require("../db");
const Wilder = require("../entity/Wilder");

module.exports = {
    create(req,res) {
    console.log(req.body);

    const {name} = req.body
    db.getRepository(Wilder).save({ name });

    res.send ("hello");
    },
};