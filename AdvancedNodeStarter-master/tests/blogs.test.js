const Page = require('./helpers/page');

let page;

beforeEach(async () => {
	page = await Page.build();
	await page.goto('localhost:3000');
});

afterEach(async () => {
	await page.close();
});


describe('When logged in', async () => {
	beforeEach(async () => {
		page = await Page.build();
		await page.click('a.btn-floating');
	});

	test('Can see blog create form', async () => {
		const label = await page.getContentsOf('form label');

		expect(label).toEqual('Blog Title');
	});

	describe('Using invalid inputs', async () => {
		beforeEach(async () => {
			await page.click('form button');
		});
		test('the form shows an error message', async () => {
			const titleErr = await page.getContentsOf('.title .red-text');
			const contentErr = await page.getContentsOf('.content .red-text');

			expect(titleErr).toEqual('You must provide a value');
			expect(contentErr).toEqual('You must provide a value');
		});
	});

});