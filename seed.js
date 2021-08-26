const mongoose = require('mongoose');
setTimeout(() => {process.exit()}, 6000)
const myVideos = require('./client/src/components/video-data.js')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/users',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
);

    const Video = mongoose.model('Video', {
        title: String,
        url: String,
        description: String,
        channel: String,
    })
    
    myVideos.forEach((video) => {
        let newVid = new Video({
            title: video.title,
            url: video.url,
            description: video.description,
            channel: video.class
        })
        newVid.save().then((data) => {console.log('saved-------', data)})
    })    