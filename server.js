const express = require('express');
const app = express();
require('./routes')(app);
const PORT = 3000;
const path = require("path");

app.use(express.static('./client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/dist/index.html'), function(err) {
      if (err) {
        console.log(err)
        res.status(500).send(err)
      }
    })
  })

// Listening for requests on the PORT
app.listen(process.env.PORT || PORT, () => {
    console.log('Serving up now at ' + JSON.stringify(PORT))
});


