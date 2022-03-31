import { contacts, info, menu, reviews, menuTitle, restTitle, contactTitle } from './page.js';
import { loadMain, tabBtn } from './page-load.js';

let btnTabs = ['home', 'menu', 'contact'];
let currentTab = btnTabs[0];
let content = document.getElementById('content');

loadMain(currentTab, content, reviews, restTitle, info);

btnTabs.forEach(btnTab => {
	var btn = document.getElementById(btnTab);
	btn.addEventListener('click', () => {
		currentTab = tabBtn(currentTab, btn.id);
		if (btn.id == 'home') {
			loadMain(btn.id, content, restTitle, info);
		} else if (btn.id == 'menu') {
			loadMain(btn.id, content, menu, menuTitle);
		} else {
			loadMain(btn.id, content, contacts, contactTitle);
		}
	});
})