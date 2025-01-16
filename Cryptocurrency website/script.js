var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var USDC = document.getElementById("dollar");
var SOL = document.getElementById("solana");
var settings = {
    "async" : true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cusd%2Csolana&vs_currencies=pkr",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    console.log(response);
    btc.innerHTML = response.bitcoin.pkr;
    eth.innerHTML = response.ethereum.pkr;
    doge.innerHTML = response.dogecoin.pkr;
    USDC.innerHTML = response.usd.pkr;
    SOL.innerHTML = response.solana.pkr;
}); 