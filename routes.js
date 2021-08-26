const mongoose = require('mongoose');
const { useParams } = require('react-router-dom');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/users',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
);
const bp = require('body-parser')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = mongoose.model('User', {
    username: String,
    password: String,
    comments: Array,
});

module.exports = function (app) {
    app.use(bp.json())
    app.use(bp.urlencoded({ extended: true }))
    app.post('/loginUser', function (req, res) {
        console.log(req.body.password)
        User.findOne({ username: req.body.username }).then((data) => {
            if (!data) {
                res.send('badUser')
            }
            bcrypt.compare(req.body.password, data.password, function (err, result) {
                // result == true
                if (result === true) {
                    res.send('success')
                } else {
                    res.send("incorrect")
                }
            });
        })
    });

    app.post('/registerUser', function (req, res) {
        console.log(req.body)
        User.findOne({ username: req.body.username }).then((data) => {
            if (!data) {
                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    let newUser = new User({
                        username: req.body.username,
                        password: hash,
                        comments: []
                    })
                    newUser.save().then(res.send('saved'))
                });
            } else {
                res.send('exists')
            }
        })
    });

    //other routes..
}