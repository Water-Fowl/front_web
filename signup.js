            var form = new Restform('#signup', 'POST', login_server + '/api/v1/new/', [
                'username', 'password', 'email', 
            ], [
                {status: 0, func: function(){
                    window.location.href = 'sent.html';
                }}, 
                {status: 1001, func: function(){
                    alert('ユーザ名が既に使われています。');
                }}, 
                {status: 1002, func: function(){
                    alert('ユーザ名が指定の形式ではありません。');
                }}, 
                {status: 1003, func: function(){
                    alert('パスワードが指定の形式ではありません。');
                }}, 
                {status: 1004, func: function(){
                    alert('このメールアドレスは既に使われています。');
                }}, 
                {status: 1005, func: function(){
                    alert('メールアドレスの形式が間違っています。');
                }}, 
                {status: 1010, func: function(){
                    alert('技術的なエラーです。');
                }}, 
                {status: 1011, func: function(){
                    alert('技術的なエラーです。');
                }}, 
                {status: 1030, func: function(){
                    alert('アクセスが拒否されました。');
                }}, 
                {status: 1405, func: function(){
                    alert('技術的なエラーです。');
                }}, 
                {status: 1500, func: function(){
                    alert('技術的なエラーです。');
                }}, 
            ]);
