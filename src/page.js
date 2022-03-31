let contacts = [
  {
    	'name': "Odin",
    	'position': "Overseer",
    	'phone': "555-555-5554",
    	'email': "GreatOdin@praytome.com",
    	'pic': "./img/file",
    	'alt': "Odin Photo"
  },
  {
    	'name': "Thor",
    	'position': "Drinking buddy",
    	'phone': "555-555-5555",
    	'email': "ThunderGodThor@praytome.com",
    	'pic': "./img/file",
    	'alt': "Thor Photo"},
  {
    	'name': "Frigg",
    	'position': "Queen AEsir",
    	'phone': "555-555-5556",
    	'email': "BowToYourGoddess@praytome.com",
    	'pic': "./img/file",
    	'alt': "Frigg Photo"
  }
]

let info = {
	'hours': {
		'sunday':{
			'open' : 'eternity'
		},
		'monday':{
			'open' : 'eternity'
		},
		'tuesday':{
			'open' : 'eternity'
		},
		'wednesday':{
			'open' : 'eternity'
		},
		'thursday':{
			'open' : 'eternity'
		},
		'friday':{
			'open' : 'eternity'
		},
		'saturday':{
			'open' : 'eternity'
		}
	},
	'location': {
		'realm' : 'Valhalla'
	}
}

let menu = [
{
	'item' : false,
	'subtitle' : 'drinks'
},
{
	'item' : true,
	'name' : "Mead",
	'desc' : "Fermented honey mixed with water, fruit, spices, grains, and hops",
	'price' : "One fallen warrior",
	'pic' : "./img/file",
	'alt' : "Mead picture"
},
{
	'item' : false,
	'subtitle' : 'foods'
},
{
	'item' : true,
	'name' : "Boar",
	'desc' : "Flesh of a boar slaughtered daily and made whole again each evening",
	'price' : "Two fallen warriors",
	'pic' : "./img/file",
	'alt' : "Roast boar"
},
]

let reviews = [
{
	'text': "I have slain all my enemies to be able to even get on the waiting list. Then I gave my life and it was worth it. Great food, better mead, and the valkyries arent bad to look at. ",
    'name': "einherjar"
}
]


let restTitle = {
	'title' : "Odin's Restaurant"
}

let menuTitle = {
	'title' : 'Offerings',
}

let contactTitle = {
	'title': "Pray to us"
}

export { contacts, info, menu, reviews, restTitle, menuTitle, contactTitle };