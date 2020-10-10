const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const callApis = require('./utils/call-apis.js');

const app = express();
app.use(bodyParser.json());
const router = express.Router();

const port = 3000;
const srvEndPt = 'http://localhost:3001/apis/check-prime/';

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

router.get('/scripts/:name', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/scripts/', req.params.name));
  });

router.post('/apis/doaction', (req, res) => {
    const data = req.body.data;
    if (data && !isNaN(data)) {
       callApis.getData(srvEndPt, data)
            .then(data => {
                  res.json(data);
                  //console.log(data);
                 })
            .catch(err => {
                  res.json(err);
                  //console.log(err);
                 });
      }
  });

app.use('/', router);
app.listen(process.env.port || port
    , () => console.log(`listening on port ${port}`));






