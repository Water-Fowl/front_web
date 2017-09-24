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
        var loc_top = 10;
        var loc_left = 10;
        var loc_center = 180;
        var locList = [
            {id: 1, x: 30 + loc_left, y: 20 + loc_top, width: 30, height: 60, color: 'blue'}, 
            {id: 2, x: 60 + loc_left, y: 20 + loc_top, width: 50, height: 20, color: 'blue'}, 
            {id: 3, x: 110 + loc_left, y: 20 + loc_top, width: 30, height: 60, color: 'blue'}, 
            {id: 5, x: 70 + loc_left, y: 70 + loc_top, width: 30, height: 20, color: 'blue'}, 
            {id: 7, x: 30 + loc_left, y: 80 + loc_top, width: 30, height: 60, color: 'blue'}, 
            {id: 8, x: 60 + loc_left, y: 120 + loc_top, width: 50, height: 20, color: 'blue'}, 
            {id: 9, x: 110 + loc_left, y: 80 + loc_top, width: 30, height: 60, color: 'blue'}, 

            {id: 14, x: 30 + loc_left + loc_center, y: 20 + loc_top, width: 30, height: 60, color: 'blue'}, 
            {id: 15, x: 60 + loc_left + loc_center, y: 20 + loc_top, width: 50, height: 20, color: 'blue'}, 
            {id: 16, x: 110 + loc_left + loc_center, y: 20 + loc_top, width: 30, height: 60, color: 'blue'}, 
            {id: 18, x: 70 + loc_left + loc_center, y: 70 + loc_top, width: 30, height: 20, color: 'blue'}, 
            {id: 20, x: 30 + loc_left + loc_center, y: 80 + loc_top, width: 30, height: 60, color: 'blue'}, 
            {id: 21, x: 60 + loc_left + loc_center, y: 120 + loc_top, width: 50, height: 20, color: 'blue'}, 
            {id: 22, x: 110 + loc_left + loc_center, y: 80 + loc_top, width: 30, height: 60, color: 'blue'}, 

            {id: 23, x: 20 + loc_left, y: -10 + loc_top, width: 110, height: 20, color: 'red'}, 
            {id: 24, x: -10 + loc_left, y: 20 + loc_top, width: 30, height: 60, color: 'red'}, 
            {id: 25, x: -10 + loc_left, y: 80 + loc_top, width: 30, height: 60, color: 'red'}, 
            {id: 26, x: 20 + loc_left, y: 150 + loc_top, width: 110, height: 20, color: 'red'}, 

            {id: 10, x: 30 + loc_left + loc_center, y: -10 + loc_top, width: 110, height: 20, color: 'red'}, 
            {id: 11, x: 150 + loc_left + loc_center, y: 20 + loc_top, width: 30, height: 60, color: 'red'}, 
            {id: 12, x: 150 + loc_left + loc_center, y: 80 + loc_top, width: 30, height: 60, color: 'red'}, 
            {id: 13, x: 30 + loc_left + loc_center, y: 150 + loc_top, width: 110, height: 20, color: 'red'}, 
        ];

        $('#setteam').submit(function(){
            $.post(api_server + '/v1/team/info', {username: 'hata', apikey: '2e24be993e86887273d4270e60cc72b068a6ab2883f149404844089eadb1c832', teamid: $('#teamid').val()}, function(res){
                if (res.status == 0){
                    var playable = 'プレイ可能: ';

                    res.owners.forEach(function(owner){
                        playable += owner + ' ';
                    });
                    res.members.forEach(function(member){
                        playable += member + ' ';
                    });

                    $('#playable').html(playable);
                }/*else if (res.status == 0){
                }*/
            });
            return false;
        });

        var time_auto = false;
        setInterval(function(){
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
            });
        });

        //列の設定
        var colModelSettings= [	
            {name:"time",index:"time",width:250,align:"center",classes:"time_class", editable:true, sorttype: function(cell){
                return new Date(cell).getTime();
            }},
            {name:"technic",index:"technic",width:50,align:"center",classes:"technic_class", editable:true},
            {name:"position",index:"position",width:50,align:"center",classes:"position_class", editable:true},
            {name:"attacker",index:"attacker",width:150,align:"center",classes:"attacker_class", editable:true},
            {name:"breaked",index:"breaked",width:150,align:"center",classes:"breaked_class", editable:true},
        ]
        //列の表示名
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

        $('#del').click(function(){
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

            return {
                username: 'hata', 
                apikey: '2e24be993e86887273d4270e60cc72b068a6ab2883f149404844089eadb1c832', 
                score: JSON.stringify({
                    //game_id: '0', 
                    //created_by: 'test', 
                    team_id: $('#teamid').val(), 
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