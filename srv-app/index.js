const express = require('express');
const primes = require('./utils/primes.js');


const app = express();
const router = express.Router();

const port = 3001;
const maxPrime = 2000;
const listPrimes = primes.genPrimes(maxPrime);
const chkPrimeEndPt = '/apis/check-prime/:number';

router.get(chkPrimeEndPt, (req, res) => {
    //console.log(req);
    res.json(primes.checkPrime(req.params.number, listPrimes));
  });

app.use('/', router);
app.listen(process.env.port || port
    , () => console.log(`listening on port ${port}`));


