import puppeteer from "puppeteer";


function openLaunch () {
    return new Promise(async resolve => {
        const browser = await puppeteer.launch({
            headless: false
        })
        const page = await browser.newPage()
        await page.setExtraHTTPHeaders({
            'withCredentials': 'true'
        })
        await page.goto('http://localhost:8080/src/')
        const timer = setInterval(async () => {
            const cookies = await page.cookies()
            const info = cookies.some(cookie => cookie.name === '_px3')
            if (info) {
                resolve(cookies.find(item => item.name === '_px3'))
                clearInterval(timer)
                await browser.close()
            }
        }, 2000)
    })
}

export function getPx3 () {
    return new Promise(async resolve => {
        const cookies = await openLaunch()
        resolve(cookies)
    })
}

// getPx3()