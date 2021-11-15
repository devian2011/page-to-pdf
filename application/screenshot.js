const puppeteer = require("puppeteer");

class screenshot {

    async pdf(url) {
        this.browser = this.browser || await puppeteer.launch({headless: false, devtools: false, args: ['--no-sandbox']});
        const page = await this.browser.newPage();
        await page.goto(url, {
            waitUntil: 'networkidle2',
        });
        await page.emulateMediaType('screen');
        const file = await page.pdf({format: 'a4'})
        await page.close()

        return file
    }

    async jpg(url) {
        this.browser = this.browser || await puppeteer.launch({headless: false, devtools: false, args: ['--no-sandbox']});
        const page = await this.browser.newPage();
        await page.goto(url, {waitUntil: 'networkidle2'});
        await page.emulateMediaType('screen');
        const file = await page.screenshot({type: 'jpeg', fullPage: true})
        await page.close()

        return file
    }
}

module.exports = new screenshot()
