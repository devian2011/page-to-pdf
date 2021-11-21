const puppeteer = require("puppeteer");

class screenshot {

    async initBrowser(){
        this.browser = this.browser || await puppeteer.launch(
            {
                headless: true,
                devtools: false,

                args: [
                    '--no-sandbox'
                ]
            });
    }

    async pdf(url) {
        await this.initBrowser();
        const page = await this.browser.newPage();
        await page.goto(url, {
            waitUntil: 'load',
            timeout: 0
        });
        const file = await page.pdf(
            {
                format: 'a4',
                printBackground: true,
                margin: {
                    top: 20,
                    left: 0,
                    right: 20,
                    bottom: 0
                }
            })
        await page.close()

        return file
    }

    async jpg(url) {
        await this.initBrowser();
        const page = await this.browser.newPage();
        await page.goto(url, {waitUntil: 'networkidle2'});
        const file = await page.screenshot({type: 'jpeg', fullPage: true})
        await page.close()

        return file
    }
}

module.exports = new screenshot()
