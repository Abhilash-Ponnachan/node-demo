const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const callApis = require('./utils/call-apis.js');

const app = express();
app.use(bodyParser.json());
const router = express.Router();

const port = process.env.PORT || 3000;
const srvHost = process.env.SRV_HOST || 'localhost';
const srvPort = process.env.SRV_PORT || 3001;
//const srvEndPt = 'http://localhost:3001/apis/check-prime/';
const srvEndPt = `http://${srvHost}:${srvPort}/apis/check-prime/`;

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
                 })
            .catch(err => {
                  res.json({error: true, msg: JSON.stringify(err)});
                  console.log(err);
                 });
      }
  });

app.use('/', router);
app.listen(port
    , () => console.log(`listening on port ${port}`));






