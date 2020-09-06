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

	describe('And Using valid inputs', async () => {
		beforeEach(async () => {
			await page.type('.title input', 'My Title');
			await page.type('.content input', 'My Content');
			await page.click('form button');
		});

		test('Submitting takes user to review screen', async () => {
			const text = await page.getContentsOf('h5');

			expect(text).toEqual('Please confirm your entries');
		});

		test('Submitting then saving adds blog to index page', async () => {
			await page.click('button.green');
			await page.waitFor('.card');

			const title = await page.getContentsOf('.card-title');
			const content = await page.getContentsOf('p');

			expect('title').toEqual('My Title');
			expect('content').toEqual('My Content');
		});
	});

	describe('And Using invalid inputs', async () => {
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

describe('User is not logged in', async () => {

	const actions = [
		{
			method : 'get',
			route : '/api/blogs'
		},
		{
			method : 'post',
			route : '/api/blogs',
			data : {
				title : 'My title',
				content : 'My content'
			}
		}
	];

	test('Blog related actions are prohibited', async () => {
		const results = await page.execRequests(actions);

		for(let result of results){
			expect(result).toEqual( { error : 'You must log in!' } );
		}
	});
});