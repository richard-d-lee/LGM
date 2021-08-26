const mongoose = require('mongoose');
const { useParams } = require('react-router-dom');
mongoose.connect('mongodb://localhost:27017/users');
const bp = require('body-parser')

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
            console.log(data.password)
            if (!data) {
                res.send('badUser')
            } else if (data.password === req.body.password) {
                console.log(data.password)
                res.send('success')
            } else {
                res.send("incorrect")
            }

        })
    });

    app.post('/registerUser', function (req, res) {
        console.log(req.body)
        User.findOne({ username: req.body.username }).then((data) => {
            if (!data) {
                let newUser = new User({
                    username: req.body.username,
                    password: req.body.password,
                    comments: []
                })
                newUser.save().then(res.send('saved'))
            } else {
                res.send('exists')
            }
        })
    });

    //other routes..
}