const puppeteer = require("puppeteer");

class screenshot {

    async buildPdf(url) {
        this.browser = this.browser || await puppeteer.launch({headless: true});
        const page = await this.browser.newPage();
        await page.goto(url, {
            waitUntil: 'networkidle2',
        });
        await page.emulateMediaType('screen');
        const file = await page.pdf({format: 'a4'})
        await page.close()

        return file
    }

    async buildJpg(url) {
        this.browser = this.browser || await puppeteer.launch({headless: true});
        const page = await this.browser.newPage();
        await page.goto(url, {waitUntil: 'networkidle2'});
        await page.emulateMediaType('screen');
        const file = await page.screenshot({type: 'jpeg', fullPage: true})
        await page.close()

        return file
    }
}

module.exports = new screenshot()
