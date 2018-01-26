 /* 
 DunkPay JavaScript Library 
 https://www.DunkPay.com
 
 Copyright 2018, Greg You
 Dual licensed under the MIT or GPL Version 2 licenses.
 Visit https://www.DunkPay.com/license 
 */
var Dunkpay = function (mode) {
  this.mode = mode
}

var dunkpayResult = function(err,result) {
  this.err = err;
  this.result = result;
}

Dunkpay.prototype.shot = function(cb)
{
  for (var k in this){
      if (this.hasOwnProperty(k)) {
           console.log(k + " : " + this[k]);
      }
  }

  if(cb)
  {
    dunkpayResult = cb
  }

  this.ownerAddress = this.address // migration.
  delete this.address

  console.log(jsonToQueryString(this))

  //if(this.type)
  //alert(this.type)

  //this.dunkpayResult = new dunkpayResult(err,result);

  var PREFIX = "https://www.bitcoinyo.com/"
  
  if(this.mode == "testnet")
    PREFIX = "http://test.bitcoinyo.com/"

  window.open(PREFIX+this.type+jsonToQueryString(this), "BitcoinYo", "width=500, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes" );    

}

function jsonToQueryString(json) {
    return "?"+
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}

function successInvoice(err , res)
{
  if(err)
    Dunkpay.cb.call(err, undefined)
  if(res)
    Dunkpay.cb.call(err, undefined)
}
