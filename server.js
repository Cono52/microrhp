// server.js

// init project
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
bodyParser.urlencoded({ extended: false })

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.json({ 
    ipaddress: req.headers['x-forwarded-for'].split(',')[0] || req.connection.remoteAddress,
    langauge: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].split('(')[1].split(')')[0]
  })
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
