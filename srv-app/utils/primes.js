function genPrimes(n){
    const nums = [...Array(n-1)].map((elem, indx) => indx + 2);
    const l = nums.length;
    let p_i = 0;
    while (p_i < l){
        let p = nums[p_i];
        for(let i=p_i+p; i<l; i+=p){
            nums[i] = 0;
        }
        while(++p_i<l && nums[p_i] === 0){}
    }
    const primes = [];
    nums.forEach((elem) => {
        if (elem !== 0){
            primes.push(elem);
        }
    });
    return primes;
}

function checkPrime(n, primes){
    const rslt = {error: false, msg: "", is_prime: false};
    if (n < 0){
        rslt.error = true;
        rslt.msg = "Input error: please provide a +ve integer!";
        return rslt;
    }
    if (n === 0 || n === 1){
        rslt.error = false;        
        rslt.is_prime = false;
        return rslt;
    }
    const last_p = primes[primes.length - 1];
    const highest = last_p * last_p;
    if (n > highest){
        rslt.error = true;
        rslt.msg = `Input error: nuber has to be <= ${highest}!`;
        return rslt;
    }
    if (n > 2 && n % 2 === 0){
        rslt.error = false;
        rslt.is_prime = false;
        return rslt;
    }
    const fact_end = Math.sqrt(n);
    for(let p of primes){
        if (p > fact_end) break;
        if (n % p === 0){
            rslt.error = false;
            rslt.is_prime = false;
            return rslt;
        }
    }
    rslt.error = false;
    rslt.is_prime = true;
    return rslt;
}


module.exports = { genPrimes, checkPrime};
