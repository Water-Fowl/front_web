            var login_server = 'http://login.water-fowl.co.jp';
            var api_server = 'http://api.water-fowl.co.jp';

            var Restform = function(form, method, url, inputs, actions){
                $(form).submit(function(){
                    var data = {};
                    inputs.forEach(function(input){
                        data[input] = $('#' + input).val();
                    });
                    $.ajax({
                        type: method, 
                        url: url, 
                        data: data, 
                        success: function(res){
                            actions.forEach(function(action){
                                if (res.status == action.status) action.func(res);
                            });
                        }, 
                        dataType: 'json', 
                    });
                    return false;
                });
            };
