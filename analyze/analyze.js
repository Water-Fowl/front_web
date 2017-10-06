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
var locList = [
	{id: 1},
	{id: 2},
	{id: 3},
	{id: 4},
	{id: 5},
	{id: 6},
	{id: 7},
	{id: 8},
	{id: 9},
	{id: 10},
	{id: 11},
	{id: 12},
	{id: 13},
	{id: 14},
	{id: 15},
	{id: 16},
	{id: 17},
	{id: 18},
	{id: 19},
	{id: 20},
	{id: 21},
	{id: 22},
	{id: 23},
	{id: 24},
	{id: 25},
	{id: 26},
];

var tecOption = '';
actionList.forEach(function(action){
	tecOption += '<option value="' + String(action.id) + '">' + action.name + '</option>';
});

var tecSelect_i = 0;
var appendTecSelect = function(){
	var div_id = 'tecnique_' + String(tecSelect_i);
	var select_id = 'tecselect_' + String(tecSelect_i);
	var remove_id = 'remove_' + String(tecSelect_i);
	var removeAction = "$('#" + div_id + "').remove(); ";
	$('#technique').append('<div id="' + div_id + '"><input id="' + remove_id + '" type="button" value="☓" onclick="' + removeAction + '"><select id="' + select_id + '">' + tecOption + '</select></div>');
	tecSelect_i++;
};

var chart = null;
$('#run').click(function(){
	var query = {
		username: $('#username').val(),
		apikey: $('#apikey').val(),
	};

	if ($('#format').val() != ''){
		query['format'] = $('#format').val();
	}

	var tec_query = '';
	$('select[id ^= tecselect_]').each(function(){
		tec_query += $(this).val() + ',';
	});
	if (tec_query != ''){
		tec_query = tec_query.slice(0, -1);
		query['technique'] = tec_query;
	}

	if ($('#play_vs').val() != '') query['play_vs'] = $('#play_vs').val();
	if ($('#play_vs_2').val() != '') query['play_vs_2'] = $('#play_vs_2').val();

	console.log(query);

	if (chart) chart.destroy();

$.get(api_server + '/v1/game/analysis', query, function(res){
		if (res.message == 'ok'){
			console.log(res.result);

			var locs = [];
			locList.forEach(function(loc){
				locs.push(String(loc.id));
			});

			var locIndex = {};
			locList.forEach(function(loc, i){
				locIndex[loc.id] = i;
			});

			var datasets = [];
			var i = 0;
			for(var tec in res.result){
				if ((tec == "")||(tec == 1)) continue;	// 技名以外は除外

				var nums = (new Array(locs.length)).fill(0);

				for(var num in res.result[tec]){
					nums[locIndex[Number(num)]] += res.result[tec][num];
				}

				datasets.push({
					label: String(tec),
					data: nums,
					backgroundColor: 'hsla(198, 50%, ' + String(i*20) + '%, 0.5)',
					borderColor: 'white',
					borderWidth: 1
				});
				i++;
			}

			var ctx = document.getElementById("myChart").getContext('2d');
			chart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: locs,
					datasets: datasets,
				},
    options: {
        title: {
            display: true, 
            text: '(検索条件)', 
            fontColor: 'white', 
            fontSize: 20, 
        }, 
        legend: {
            display: false
        }, 
        scales: {
            xAxes: [{
		stacked: true,
                gridLines: {
                    display: false, 
                    color: 'rgba(54, 162, 211, 0.5)', 
                }, 
                ticks: {
                    fontColor: 'white', 
                    fontSize: 14, 
                }, 
            }], 
            yAxes: [{
		stacked: true,
                ticks: {
                    fontColor: 'white', 
                    fontSize: 12, 
			userCallback: function(label, index, labels) {
				if (Math.floor(label) === label) return label;
			},
                }, 
            }], 
        }
    }
});
			$('#legend').html(chart.generateLegend());


		}else{
			alert(res.message);
		}
});

});
