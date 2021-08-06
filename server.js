const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test', 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false, });
const Cat = mongoose.model('Cat', { name: String });

app.get('/helloworld', (req, res) => {
    res.json({ body: "helloworld" });

    const kitty = new Cat({ name: 'Butterbeans' });
    kitty.save().then(() => console.log('meow')).catch((err) => {console.log(err)})

})

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at ' + JSON.stringify(PORT))
});


