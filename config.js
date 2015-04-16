module.exports = {
	'db': {
		'name': 'lol-bets',
		'host': 'localhost',
		'port': 27017
	},
	'mandrill': {
		'apiKey': 'e7J3PZMm1KF4qkXLP2nmnw'
	},
	'riot': {
		'apiKey': '040f1207-45a5-45f7-bdc5-e41356ce433e',
		'regions': [
			{
				'name': 'br',
				'endpoint': 'https://br.api.pvp.net/' 
			},
			{
				'name': 'eune',
				'endpoint': 'https://eune.api.pvp.net/'
			},
			{
				'name': 'lan',
				'endpoint': 'https://lan.api.pvp.net/'
			},
			{
				'name': 'las',
				'endpoint': 'https://las.api.pvp.net/'
			},
			{
				'name': 'na',
				'endpoint': 'https://na.api.pvp.net/'
			},
			{
				'name': 'oce',
				'endpoint': 'https://oce.api.pvp.net/'
			},
			{
				'name': 'tr',
				'endpoint': 'https://tr.api.pvp.net/'
			},
			{
				'name': 'ru',
				'endpoint': 'https://ru.api.pvp.net/'
			},
			{
				'name': 'kr',
				'endpoint': 'https://kr.api.pvp.net/'
			},
			{
				'name': 'euw',
				'endpoint': 'https://euw.api.pvp.net/'
			}
		],
		'championPortraitEndpoint': 'http://ddragon.leagueoflegends.com/cdn/5.7.2/img/champion/',
		'summonerIconEndpoint': 'http://ddragon.leagueoflegends.com/cdn/5.7.2/img/profileicon/'
	},
	'app': {
		'startingGold': 500,
		'accountActivationTokenTTL': 20 * 60 * 1000, //20 minutes in miliseconds
		'port': 80,
		'client': 'http://www.urfracle.com'
	}
}