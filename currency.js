var to="", from="", amount;
var headers = new Headers();
headers.append('apikey','YrC4mIN25KYxENvVt0NnuwhHWI3qUvpu');


var myHeaders = new Headers();
myHeaders.append("apikey", "YrC4mIN25KYxENvVt0NnuwhHWI3qUvpu");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

document.addEventListener('DOMContentLoaded',()=>{

    document.querySelector('#currency').onclick = ()=>{

        var el = document.querySelector('#currency_exchange');
        if(el.style.display == 'none'){
            el.style.display = 'block';
        }
        else {
            el.style.display = 'none';
        }
        
    }

    

    document.querySelector('form').onsubmit = ()=>{

        to = document.querySelector('#to').value;
        to = to.toUpperCase();
        from = document.querySelector('#from').value;
        from = from.toUpperCase();
        amount = document.querySelector('#amt').value;

        return false;
    }

    document.querySelector('#get_details').onclick = ()=>{
        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
});