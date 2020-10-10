const http = require('http');

async function getData(url, param)
{
    const reqUrl = `${url}${param}`;
    return new Promise((resolve, reject) => {
        http.get(reqUrl, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on("error", (err) => {
            reject(err);
        }); 
    });
}

module.exports = { getData };
