const puppeteer = require('puppeteer');
const sessionFactory = require('factories/sessionFactory');
const userFactory = require('factories/userFactory');

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

	const { session, sig } = sessionFactory();

	await page.setCookie({ name : 'session', value : session });
	await page.setCookie({ name : 'session.sig', value : sig });

	await page.goto('localhost:3000');
	await page.waitFor('a[href="auth/logout"]');

	const text = await page.$eval('a[href="auth/logout"]', el => el.innerHTML);

	expect(text).toEqual('logout');
});