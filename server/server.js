const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser())

app.get('/surveys', (req, res) => {
  fs.readFile('surveys.json', 'utf8',  (err, data) => {
    if(err) throw err;
    res.status(200).send(JSON.stringify(data));
  });
})

app.post('/createSurvey', (req, res) => {
  //write to file
  fs.writeFile("surveys.json", JSON.stringify(req.body), (err) => {
    if(err) throw err;
  });
  res.sendStatus(200);
})

app.listen(PORT, console.log(`listening on ${PORT}`))