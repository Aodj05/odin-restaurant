function tabBtn(currentTab, nextTab) {
	let current = document.getElementById(`tab${currentTab}`);
	let next = document.getElementById(`tab${nextTab}`);

	current.classList.add('next');
	next.classList.remove('next');

	return nextTab;
}

function clear(parent) {
	parent.textContent = '';
	return true;
}

function loadCard(cardConfig) {
	let outer = document.createElement('div');
	outer.classList.add('card-outer');
	outer.classList.add(cardConfig[0]['outer']);

	let inner = document.createElement('div');
	inner.classList.add('card-inner');
	inner.classList.add(cardConfig[0]['inner']);

	for (let i =1; i < cardConfig.length; i++) {
		if (cardConfig[i]['ele'] == 'p') {
			var element = document.createElement('p');
			let elementText = document.createTextNode(cardConfig[i]['text']);

			element.appendChild(elementText);
		} else if (cardConfig[i]['ele'] == 'h3') {
			var element = document.createElement('h3');
			let elementText = document.createTextNode(cardConfig[i]['text']);

			element.appendChild(elementText);
		} else {
			var element = document.createElement('div');
			element.style.backgroundImage = `url(${cardConfig[i]['source']})`;
			element.setAttribute('title', cardConfig[i]['text']);
		}

		element.classList.add(cardConfig[i]['class']);

		inner.appendChild(element);
	}

	outer.appendChild(inner);

	return outer;
}

function loadContact(name, position, phone, email, pic, alt) {
	return [
	{
		'outer': 'contact-outer',
		'inner': 'contact-inner'
	},
	{
	 	'ele': 'h3',
	 	'text': name,
     	'class': 'person'
    },
    {
      	'ele': 'p',
      	'text': position,
      	'class': 'position'
    },
    {
      	'ele': 'p',
      	'text': phone,
      	'class': 'phone'
    },
    {
      	'ele': 'p',
      	'text': email,
      	'class': 'email'
    },
    {
      	'ele': 'img',
      	'text': alt,
      	'class': 'contact-pic',
      	'source': pic
    }
	]
}

function loadInfo(info) {
	return[[
	{
		'outer' : 'info-hrs-out',
		'inner' : 'info-hrs-in'
	},
	{
		'ele' : 'h3',
		'text' : 'Hours',
		'class' : 'hours'
	},
	 {
      'ele': 'p',
      'text': 'Sunday: eternity',
      'class': 'sunday'
    },
    {
      'ele': 'p',
      'text': 'Monday: eternity',
      'class': 'monday'
    },
    {
      'ele': 'p',
      'text': 'Tuesday: eternity',
      'class': 'tuesday'
    },
    {
      'ele': 'p',
      'text': 'Wednesday: eternity',
      'class': 'wednesday'
    },
    {
      'ele': 'p',
      'text': 'Thursday: eternity',
      'class': 'thursday'
    },
    {
      'ele': 'p',
      'text': 'Friday: eternity',
      'class': 'friday'
    },
    {
      'ele': 'p',
      'text': 'Saturday: eternity',
      'class': 'saturday'
    }],
    [{
      'outer': 'info-location-out',
      'inner': 'info-location-in'
    },
    {
      'ele': 'h3',
      'text': 'Location',
      'class': 'location'
    },
    {
      'ele': 'p',
      'text': 'Valhalla',
      'class': 'address'
	}]
	]
}

function loadMenuItem(name, desc, price, pic, alt) {
	return [
	{
		'outer' : 'menu-out',
		'inner' : 'menu-in'
	},
	    {
      'ele': 'h3',
      'text': name,
      'class': 'item-name'
    },
    {
      'ele': 'p',
      'text': desc,
      'class': 'item-description'
    },
    {
      'ele': 'p',
      'text': price,
      'class': 'item-price'
    },
    {
      'ele': 'img',
      'text': alt,
      'class': 'item-pic',
      'source': pic
    }
	]
}

function loadReview(review, name) {
	return [
	{
		'outer': 'review-outer',
		'inner': 'review-inner'
	},
	{
      	'ele': 'p',
      	'text': review,
      	'class': 'review'
    },
    {
      	'ele': 'p',
      	'text': name,
      	'class': 'customer'
    }
	]
}

function loadSubTitleElements(subtitle, headingClass, containerClass) {
	let container = document.createElement('div');
	container.classList.add('heading-container');

	let heading = document.createElement('div');
	heading.classList.add("heading");

	if (containerClass && containerClass != '') {
		container.classList.add(containerClass);
	}

	if (headingClass && headingClass != '') {
		heading.classList.add(headingClass);
	}

	let title = document.createElement('h2');
	title.textContent = subtitle;

	heading.appendChild(title);

	container.appendChild(heading);

	let card = document.createElement('img');
	card.classList.add('deco', 'sub-container');
	card.setAttribute('src', './img/file');

	container.appendChild(card);

	return container;
}

function loadTitleElements(pTitle, imgClass, headingClass, containerClass) {
	let img1 = document.createElement('img');
	img1.classList.add('deco', imgClass);
	img1.setAttribute('src', './img/file');

	let container = document.createElement('div');
	container.classList.add('heading-container');

	let heading = document.createElement('div');
	heading.classList.add("heading");

	let title = document.createElement('h1');
	title.textContent = pTitle;

	if (containerClass && containerClass != '') {
		container.classList.add(containerClass);
	}

	if (headingClass && headingClass != '') {
		heading.classList.add(headingClass);
	}

	heading.appendChild(title);

	container.appendChild(img1);
	container.appendChild(heading);

	return container;
}

function showInfo(parent, info) {
	let inform = loadInfo(info);

	inform.forEach(section => {
		let infoCard = loadCard(section);
		parent.appendChild(info);
	});

	return true;
}

function loadMain(type, parent, content, title, info) {
	clear(parent);
	loadTitle(type, parent, title);

	content.forEach(content => {
		if (type == 'home') {
			var contentConfig = loadReview(content.text, content.name);
		} else if (type == 'menu') {
				if (content.item) {
					var contentConfig = loadMenuItem(content.name, content.desc, content.price, content.pic, content.alt);
				} else {
					var sectTitle = loadSubTitleElements(content.subtitle, 'title')
					parent.appendChild(sectTitle);
					return;
				}
			} else {
				var contentConfig = loadContact(content.name, content.position, content.phone, content.email, content.pic, content.alt);
			}

			let contentBg = loadCard(contentConfig);

			parent.appendChild(contentBg);
	});

	if (type == 'home') {
		loadInfo(parent, info);

		let backg = document.createElement('img');
		backg.classList.add('deco', 'backg');
		backg.setAttribute('src', './img/file');

		parent.appendChild(backg);
	}
	return true;
}

function loadTitle(type, parent, title) {
	if (type == "home") {
		var titleElements = loadTitleElements(title.title, title.imgClass);
	} else if (type == "menu") {
		var titleElements = loadTitleElements(title.title, title.imgClass, "menu-heading", "menu-container");
	} else if (type == "contact") {
		var titleElements = loadTitleElements(title.title, imgClass, "contact-heading", "contact-container");
	} else {
		var titleElements = loadSubTitleElements(title.title);
	}

	parent.appendChild(titleElements);
	return true;
}

export { loadMain, tabBtn };