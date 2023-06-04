describe('Basic home page test', () => {
    it('open page and verify title', () => {
        browser.url('http://127.0.0.1:5500/html/home.html');
        expect(browser).toHaveTitle('')
    })
})