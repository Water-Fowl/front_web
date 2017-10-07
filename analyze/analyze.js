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

for(var name in userList){
	$('#user').append('<option value="' + name + '">' + name + '</option>');
}

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
	var username = $('#user').val();
	var query = {
		username: username,
		apikey: userList[username].apikey,
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
            text: '分析結果', 
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
