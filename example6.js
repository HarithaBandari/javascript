array =    [ [ 'cardType', 'iDEBIT' ],
      [ 'txnAmount', '17.64' ],
      [ 'txnId', '20181' ],
      [ 'txnType', 'Purchase' ],
      [ 'txnDate', '2015/08/13 21:50:04' ],
      [ 'respCode', '0' ],
      [ 'isoCode', '0' ],
      [ 'authCode', '' ],
      [ 'acquirerInvoice', '0' ],
      [ 'message', '' ],
      [ 'isComplete', 'true' ],
      [ 'isTimeout', 'false' ] ];
    
var obj = {};
array.forEach(function(data){
    obj[data[0]] = data[1]
});
console.log(obj);

