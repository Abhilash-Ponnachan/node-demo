const HOST = location.protocol + "//" + window.location.hostname
    + (window.location.port ? ":" + window.location.port : "");
const API = HOST + "/apis/doaction";

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors',
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data)
     });
     return response.json(); 
}

function submitData(){
    var txtInput = document.getElementById("txtInput");
    if (txtInput){
        var data = {data: txtInput.value};
        postData(API, data)
            .then(respData => {
                setValue(JSON.stringify(respData));
              })
            .catch(err => {
                console.log(err);
              });
    }
}

function clearData(){
    setValue("");
}

function setValue(value){
    var txtarea = document.getElementById("txtOutput");
    if (txtarea){
        txtarea.value = value;
    }
}
