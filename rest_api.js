param = {
    'username': 'test-hatahata', 
    'password': 'nes6502nes6502', 
    'email': 'hato6502@gmail.com'
};
callback = function(data){
    console.log(data);
};
$.post('http://login.water-fowl.co.jp/api/v1/new/', param, callback, 'json');
/*param = {
    'username': 'test-hata', 
    'password': 'nes6502', 
};
callback = function(data){
    alert(data);
};
$.post('http://login.water-fowl.co.jp/api/v1/auth/', param, callback, 'jsonp');*/