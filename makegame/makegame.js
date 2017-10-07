var userList = {
	hata: {apikey: '2e24be993e86887273d4270e60cc72b068a6ab2883f149404844089eadb1c832'},

	A: {apikey: '251e45d5033bebaec8d9d9f7f77b11e1a94fe307835e33e64ca6e17216c9c9be'},
	B: {apikey: '65e848efa63ee87b8d68c6b4b6e97b3d91bcd84a37ce2cb4b1683a58105c440f'},
	C: {apikey: '26c8cccfc9f35778259a4b3ae842dfe4c2ae708b5d9fe32511aab7af54fb69fa'},
	D: {apikey: '8113f511191058f83dc2fba97d23eb73d5c02cc9f7c7b5b92996d7ce4a9b7487'},
	E: {apikey: '005fa86397427b469f670a55614074bda4de873f68967f6a70e78edcd8aa46ae'},

	F: {apikey: 'eeb48079b87bef492b50f9717df28bd9230db9a0a30bb47708ba9b59ece58d32'},
	G: {apikey: 'fdbcdffde4994b69f7f862ffeafb4f688de11cfd46d70b5c08f2ee56035f8eb1'},
	H: {apikey: '21a72b4c1d2c956f8c02e6f16e8c0cbce88491c1e30b1afe07b7679415741959'},
	I: {apikey: '10f2b619b4b597efbb4f49deebc4a5e613c6111b74914f33a2f7fe40fc2405b6'},
	J: {apikey: 'ca99375806c3cc4b4594d14dc3ec7d0c4189acd61071618df7d12d4fc65827a6'},
};

var teamList = {
	'ee124009543147a307a95f41ffcda90dfdd8569d3b10e1a324f252ce1c085682': {name: 'nankatsu'},
	'ee6906af91f26269c8634212c6d91efbabb646cf2a36fa4fde7f52a3117b31e3': {name: 'team_1'},
	'92220febe3e222407ff0be7d577827ed797dcfcfe65a1b835d317836e446b250': {name: 'team_2'},
};

        var actionList = [
            {id: 1, name: 'スマッシュ'}, 
            {id: 2, name: 'クリア'}, 
            {id: 3, name: 'ドライブ'}, 
            {id: 4, name: 'プッシュ'}, 
            {id: 5, name: 'ロブ'}, 
            {id: 6, name: 'サービス'}, 
            {id: 7, name: 'ドロップ'}, 
            {id: 8, name: 'ヘアピン'}, 
            {id: 9, name: 'ネットイン（スマッシュ）'}, 
            {id: 10, name: 'ネットイン（ドライブ）'}, 
            {id: 11, name: 'ミス（サービス）'}, 
            {id: 12, name: 'ミス（ネットスマッシュ）'}, 
            {id: 13, name: 'ミス（ネットプッシュ）'}, 
            {id: 14, name: 'ミス（ネットヘアピン）'}, 
            {id: 15, name: 'ミス（ネットドライブ）'}, 
            {id: 16, name: 'ミス（ネットドロップ）'}, 
            {id: 17, name: 'レシーブ'}, 
        ];
        //var loc_top = 90;
        //var loc_left = 70;

        var center_height = 268;
        var locList = [
            {id: 1, x: 167, y: 118, width: 90, height: 32, color: 'blue'}, 
            {id: 2, x: 229, y: 175, width: 30, height: 78, color: 'blue'}, 
            {id: 3, x: 169, y: 272, width: 91, height: 41, color: 'blue'}, 
            {id: 5, x: 136, y: 192, width: 45, height: 53, color: 'blue'}, 
            {id: 7, x: 61, y: 118, width: 90, height: 32, color: 'blue'}, 
            {id: 8, x: 59, y: 175, width: 32, height: 81, color: 'blue'}, 
            {id: 9, x: 60, y: 277, width: 92, height: 33, color: 'blue'}, 

            {id: 14, x: 167, y: 118 + center_height, width: 90, height: 32, color: 'blue'}, 
            {id: 15, x: 229, y: 175 + center_height, width: 30, height: 78, color: 'blue'}, 
            {id: 16, x: 169, y: 272 + center_height, width: 91, height: 41, color: 'blue'}, 
            {id: 18, x: 136, y: 192 + center_height, width: 45, height: 53, color: 'blue'}, 
            {id: 20, x: 61, y: 118 + center_height, width: 90, height: 32, color: 'blue'}, 
            {id: 21, x: 59, y: 175 + center_height, width: 32, height: 81, color: 'blue'}, 
            {id: 22, x: 60, y: 277 + center_height, width: 92, height: 33, color: 'blue'}, 

            {id: 23, x: 278, y: 89, width: 32, height: 205, color: 'red'}, 
            {id: 24, x: 162, y: 66, width: 110, height: 20, color: 'red'}, 
            {id: 25, x: 47, y: 66, width: 110, height: 20, color: 'red'}, 
            {id: 26, x: 12, y: 89, width: 32, height: 205, color: 'red'}, 

            {id: 10, x: 277, y: 401, width: 32, height: 205, color: 'red'}, 
            {id: 11, x: 165, y: 616, width: 103, height: 20, color: 'red'}, 
            {id: 12, x: 47, y: 616, width: 107, height: 20, color: 'red'}, 
            {id: 13, x: 12, y: 404, width: 32, height: 205, color: 'red'}, 
        ];

for(var name in userList){
	$('#user').append('<option value="' + name + '">' + name + '</option>');
}

for(var id in teamList){
	$('#team').append('<option value="' + id + '">' + teamList[id].name + '</option>');
}

        var now = new Date();
        $('#start_date').val(now.toISOString().slice(0, 16));

        $('#setteam').submit(function(){
		var username = $('#user').val();
            $.post(api_server + '/v1/team/info', {username: username, apikey: userList[username].apikey, teamid: $('#team').val()}, function(res){
                if (res.status == 0){
                    var players = [];

                    res.owners.forEach(function(owner){
                        players.push(owner);
                    });
                    res.members.forEach(function(member){
                        players.push(member);
                    });

                    ['#left_0', '#left_1', '#right_0', '#right_1', '#first_service', '#first_receive', '#attacker', '#breaked'].forEach(function(selbox){
                        $(selbox).empty();
                        players.forEach(function(player){
                            $(selbox).append('<option value="' + player + '">' + player + '</option>');
                        });
                    });
                    $('#left_1').append('<option value="">なし</option>');
                    $('#right_1').append('<option value="">なし</option>');
                }/*else if (res.status == 0){
                }*/
            });
            return false;
        });

        var time_auto = false;
        setInterval(function(){ // 時間の自動カウント
            if (time_auto){
                var datestr = $('#date').val().split(':');
                var hour, min, sec; 
                if (datestr.length == 3){
                    hour = Number(datestr[0]);
                    min = Number(datestr[1]);
                    sec = Number(datestr[2]);
                }else if (datestr.length == 2){
                    hour = Number(datestr[0]);
                    min = Number(datestr[1]);
                    sec = 0;
                }

                var time = (hour*60 + min)*60 + sec;
                time++;
                datestr = ( '00' + Math.floor(time/3600)%24 ).slice( -2 ) + ':' + ( '00' + Math.floor(time/60)%60 ).slice( -2 ) + ':' + ( '00' + time%60 ).slice( -2 );
                $('#date').val(datestr);
            }
        }, 1000);
        $('#time_play').click(function(){
            time_auto = true;
        });
        $('#time_stop').click(function(){
            time_auto = false;
        });

        actionList.forEach(function(action){
            $('#action').append('<option value="' + action.id + '">' + action.name + '</option>');
        });

        var getPoint = function(){
            var arrows = $('#sample1').jqGrid('getDataIDs');
            var point_left = point_right = 0;
            arrows.forEach(function(id){
                var row = $('#sample1').getRowData(id);
                if (row.position <= 13){
                    point_right++;
                }else{
                    point_left++;
                }
            });

            return {left: point_left, right: point_right};
        };

        var updatePoint = function(){   // 点数の更新表示
            var points = getPoint();

            $('#point_left').html('左<br>' + points.left);
            $('#point_right').html('右<br>' + points.right);
        };

        locList.forEach(function(loc){
            $('#location').append('<input id="loc_' + loc.id + '" type="button" value="' + loc.id + '" style="position: absolute; top: ' + loc.y + 'px; left: ' + loc.x + 'px; width: ' + loc.width + 'px; height: ' + loc.height + 'px; color: ' + loc.color + '">');
            $('#loc_' + loc.id).click(function(){
                var start_time = new Date($('#start_date').val());

                var rel_time; {
                    var datestr = $('#date').val().split(':');
                    var hour, min, sec; 
                    if (datestr.length == 3){
                        hour = Number(datestr[0]);
                        min = Number(datestr[1]);
                        sec = Number(datestr[2]);
                    }else if (datestr.length == 2){
                        hour = Number(datestr[0]);
                        min = Number(datestr[1]);
                        sec = 0;
                    }else{
                        alert('エラー');
                    }

                    rel_time = ((hour*60 + min)*60 + sec)*1000;
                }

                var abs_time = new Date(start_time.getTime() + rel_time);
                
                $("#sample1").addRowData(undefined, {
                    technic: Number($('#action').val()), 
                    position: Number(loc.id), 
                    time: abs_time.toISOString(), 
                    attacker: $('#attacker').val(), 
                    breaked: $('#breaked').val(), 
                });

                updatePoint();
            });
        });

        //列の設定
        var colModelSettings= [	
            {name:"time",index:"time",width:75,align:"center",classes:"time_class", editable:false, sorttype: function(cell){
                return new Date(cell).getTime();
            }, formatter: function(val){
                var start_time = (new Date($('#start_date').val())).getTime();
                var time = (new Date(val)).getTime();
                var rel_time = time - start_time;

                var m = Math.floor(rel_time/1000/60);
                var s = Math.floor(rel_time/1000)%60;
                return m + '分' + s + '秒';
            }},
            {name:"technic",index:"technic",width:100,align:"center",classes:"technic_class", editable:false, formatter: function(val){
                return actionList.filter(function(item){
                    if (item.id == val) return true;
                })[0].name;
            }},
            {name:"position",index:"position",width:50,align:"center",classes:"position_class", editable:true},
            {name:"attacker",index:"attacker",width:150,align:"center",classes:"attacker_class", editable:true},
            {name:"breaked",index:"breaked",width:150,align:"center",classes:"breaked_class", editable:true},
        ]
        var colNames = ['時間', '技', '落下点', '点数を決めた人', '点数を決められた人'];

        //テーブルの作成
        $("#sample1").jqGrid({
            //data:date,  //表示したいデータ
            datatype : "local",            //データの種別 他にjsonやxmlも選べます。
                                            //しかし、私はlocalが推奨です。
            colNames : colNames,           //列の表示名
            colModel : colModelSettings,   //列ごとの設定
            //rowNum : 5,                   //一ページに表示する行数
            caption : "スコア",    //ヘッダーのキャプション
            height : '480',                  //高さ
            pager : 'pager1',              //footerのページャー要素のid
            shrinkToFit : true,　　        //画面サイズに依存せず固定の大きさを表示する設定
            viewrecords: true,               //footerの右下に表示する。
            cellEdit: true, 
            cellsubmit: 'clientArray', 
            multiselect: true, 
        });

        $('#del').click(function(){ // 行削除
            var arrrows = $("#sample1").getGridParam("selarrrow");
                if(arrrows.length == 0) {
                    alert("削除する行を選択してください。");
                } else {
                    // 選択行の削除
                    // グリッドの下の方から削除していかないと、選択行すべて削除できない。
                    // BUG: http://www.trirand.com/blog/?page_id=393/bugs/delrowdata-bug-on-grid-with-multiselect
                    var len = arrrows.length;
                    for(i = len-1; i >= 0; i--) {
                        $("#sample1").delRowData(arrrows[i]);
                    }
                }
            updatePoint();
        });

        var genRequest = function(){
            $('#sample1').jqGrid('setGridParam', {sortorder: 'desc'});
            $('#sample1').jqGrid('sortGrid', 'time');

            var technic = [];
            var position = [];
            var time = [];
            var attacker = [];
            var breaked = [];
            var arrows = $('#sample1').jqGrid('getDataIDs');

            var point_left = point_right = 0;
            var start_time = new Date($('#start_date').val());
            var end_time = start_time;
            arrows.forEach(function(id){
                var row = $('#sample1').getRowData(id);

                technic.push(row.technic);
                position.push(row.position);
                time.push(row.time);
                attacker.push(row.attacker);
                breaked.push(row.breaked);

                if (row.position <= 13){
                    point_right++;
                }else{
                    point_left++;
                }

                end_time = row.time;
            });

            var pair_left = [];
            if ($('#left_0').val() != '') pair_left.push($('#left_0').val());
            if ($('#left_1').val() != '') pair_left.push($('#left_1').val());

            var pair_right = [];
            if ($('#right_0').val() != '') pair_right.push($('#right_0').val());
            if ($('#right_1').val() != '') pair_right.push($('#right_1').val());            

		var username = $('#user').val();
            return {
		username: username,
		apikey: userList[username].apikey,
                score: JSON.stringify({
                    //game_id: '0', 
                    //created_by: 'test', 
                    team_id: $('#team').val(), 
                    start_time: start_time, 
                    end_time: end_time, 
                    pair_left: pair_left, 
                    pair_right: pair_right, 
                    first_service: $('#first_service').val(), 
                    first_receive: $('#first_receive').val(), 
                    point_left: point_left, 
                    point_right: point_right, 
                    match_point: $('#match_point').val(), 
                    deuce: Boolean($("#deuce:checked").val()), 
                    score: {
                        technic: technic, 
                        position: position, 
                        time: time, 
                        attacker: attacker, 
                        breaked: breaked, 
                    }, 
                }), 
            };
        };

        $('#fileout').click(function(){
            $('#fileout').attr('href', 'data:application/octet-stream,' + encodeURIComponent(JSON.stringify(genRequest())));
        });

        $('#submit').click(function(){
            
            $.post(api_server + '/v1/game/', genRequest(), function(res){
                alert(res.message  + ' gameid: ' + res.gameid);
                console.log(res);
            }); 
        });
