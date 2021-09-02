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

const Video = mongoose.model('Video', {
    title: String,
    url: String,
    description: String,
    channel: String,
    comments: Array,
})

const User = mongoose.model('User', {
    username: String,
    password: String,
});

module.exports = function (app) {
    app.use(bp.json())
    app.use(bp.urlencoded({ extended: true }))
    app.post('/loginUser', function (req, res) {
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
    app.post('/comment', function (req, res) {
        let myData = req.body;
        myData.comments = [{
            username: myData.username, 
            comment: myData.comment, 
            date: new Date(),
        }]
        //storing username/comment combo
        delete myData.username;
        delete myData.comment;
        Video.findOne({url: myData.url}).then((data) => {
            if (!data) {
                Video.create(myData).then((data) => {
                    console.log('video created and comment saved');
                    res.send('saved')
                }).catch((err) => {console.log(err)})
            } else {
                let comments = data.comments;
                comments.push(myData.comments[0]);
                Video.findOneAndUpdate({url: myData.url}, {comments: comments}).then((data) => {
                    res.send('saved')
                }).catch((err) => {console.log(err); res.send(err)})
            }
        })
    });

    app.get('/comments:id', function (req, res) {
        let comments;
        let id = req.params.id.substr(1);
        Video.findOne({title: id}).then((data) => {
            if (data) {
                res.send(data.comments)
            } else {
                res.send('hello')
            }
        })
        //storing username/comment combo
    });

    //other routes..
}