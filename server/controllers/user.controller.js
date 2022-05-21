const mongoose = require('mongoose');

const User = mongoose.model('User');


module.exports.register = (req, res, next) => {
    console.log ("inside register func");
    var user = new User();
    user.userName = req.body.userName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) =>{
        if (!err)
            res.send(doc);
        else
        {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email address.'])
            else
                return next(err);
        }
    })
    

}

module.exports.authenticate = (req, res, next) => {
    console.log ("inside register func");
    var user = new User();
    user.userName = req.body.userName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) =>{
        if (!err)
            res.send(doc);
        else
        {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email address.'])
            else
                return next(err);
        }
    })
    

}