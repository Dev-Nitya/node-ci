const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => { //this will run before every test
	browser = await puppeteer.launch({
		headless : false //headless mode means browser will open without GUI
	});
	page = await browser.newPage();
	await page.goto('localhost:3000');
});

afterEach(async () => {
	await browser.close();
});

test('the header has the correct text', async () => {
	const text = await page.$eval('a.brand-logo', el => el.innerHTML);

	expect(text).toEqual('Blogster');
});

test('clicking login starts Oauth flow', async () => {
	await page.click('.right a');

	const url = await page.url();
	expect(url).toMatch('/accounts\.google\.com/');
});

test('when signed in, shows logout button', async () => {
	const id = '5f40f49c15d4743498245c8f';

	const Buffer = require('safe-buffer').Buffer;
	const sessionObject = {
		passport : {
			user : id 
		}
	};
	const sessionString = Buffer.from(
		JSON.stringify(sessionObject)
		).toString('base64');

	const Keygrip = require('keygrip');
	const keys = require('../config/keys');
	const keygrip = new Keygrip([keys.cookieKey]);
	const sig = keygrip.sign('session=' + sessionString);
	console.log(sessionString, sig);
});