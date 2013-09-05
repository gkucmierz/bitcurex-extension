

var id = function(id){
  return document.getElementById(id);
};

var qs = function(sel, doc){
  doc = doc || document;
  return doc.querySelector(sel);
};

// BID

['bid', 'ask'].map(function(type){
  var bidBtn = id(type + '_submit_container');
  var myBtn = bidBtn.cloneNode(true);

  myBtn.id = '';
  var btn = qs('#'+type+'_submit', myBtn);
  btn.id = '';
  btn.disabled = false;
  btn.value = type === 'bid' ? 'za wszystko' : 'wszystkie';
  btn.type = 'button';

  btn.addEventListener('click', function(){
    if (type==='bid') {
      id('bid_bitcoin').value = Math.floor(parseFloat(id('profileCurrency').innerText)/parseFloat(id('bid_currency').value)*1e4)*1e-4;
    } else if (type==='ask') {
      id('ask_bitcoin').value = id('profileBtc').innerText;
    }
  }, false);

  bidBtn.previousSibling.previousSibling.insertBefore(myBtn);
});