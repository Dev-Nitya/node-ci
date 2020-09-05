const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => { //this will run before every test
	browser = await puppeteer.launch({
		headless : false //headless mode means browser will open without GUI
	});
	page = await browser.newPage();
	await page.goto('localhost:3000');
});

test('We can launch a browser', async () => {
	const text = await page.$eval('a.brand-logo', el => el.innerHTML);

	expect(text).toEqual('Blogster');
});