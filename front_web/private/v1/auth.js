var form = new Restform('#auth', 'POST', login_server + '/api/v1/auth/', [
    'username', 'password', 
], [
    {status: 0, func: function(res){
        alert('デバッグ出力 APIキー: ' + res.apikey);
    }}, 
    {status: 1002, func: function(res){
        alert('ユーザ名が指定の形式ではありません。');
    }}, 
    {status: 1003, func: function(res){
        alert('パスワードが指定の形式ではありません。');
    }}, 
    {status: 1008, func: function(res){
        alert('キーの取得に失敗しました。ユーザ名とパスワードを確認してください。');
    }}, 
    {status: 1010, func: function(res){
        alert('技術的なエラーです。');
    }}, 
    {status: 1011, func: function(res){
        alert('技術的なエラーです。');
    }}, 
    {status: 1030, func: function(res){
        alert('アクセスが拒否されました。');
    }}, 
    {status: 1405, func: function(res){
        alert('技術的なエラーです。');
    }}, 
    {status: 1500, func: function(res){
        alert('技術的なエラーです。');
    }}, 
]);
