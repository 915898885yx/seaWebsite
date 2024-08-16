import request from 'request'
import puppeteer from 'puppeteer'
import qs from 'qs'
import { getUuid } from './uuid.js'
import { initPostData } from './main.js'
// import { initPostDataSecond } from './main1.js'
const proxy = 'http://76xf70sORd-zone-mars-region-US:35527311@na.3cfb97945f46ee2a.ipmars.vip:4900'
const headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://www.wayfair.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.wayfair.com",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}

async function openLaunch (firstRes) {
    
    return new Promise(async resolve => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto('http://localhost:8080/src/')
        
        const result = await page.evaluate(_firstRes => {
            sessionStorage.setItem('firstRes', JSON.stringify(_firstRes))
            return true
        }, firstRes)
        console.log(result, 'result')
        let sessionStorageEntries
        const timer = setInterval(async () => {
            let _session = await page.evaluate(() => {
                return Object.assign({}, sessionStorage)
            })
            console.log(_session, 'timer')
            if (_session?.postData?.length) {
                clearInterval(timer)
                sessionStorageEntries = _session.postData
                resolve(sessionStorageEntries)
                await browser.close()
            }
        }, 1000)
    })

    
    // const cookies = await page.cookies()
    // console.log(sessionStorageEntries, 'cookie')
}
// openLaunch()

function bodyFunc (value) {
    const res = {}
    // const urlencoded = new URLSearchParams();
    value.split('&').forEach(item => {
        const [key, value] = item.split('=')
        console.log(key, value, )
        res[key.replace('"', '')] = value.replace('"', '')
    })
    return res
}


async function init () {
    const { data, zf } = await initPostData()
    console.log(data, 'data')
    ajax(data.postData, zf)
}
function ajax (_body, zf) {
    request({
        url: 'https://collector-px3vk96i6i.px-cloud.net/api/v2/collector',
        proxy,
        headers,
        method: 'POST',
        body: _body
    }, async function (error, res, body) {
        if (error) throw Error(error)
        console.log(body,'body')
        const secondRes = await openLaunch(body)
        const body2 = bodyFunc(secondRes) // vid  cts  rsc=1
        body2.vid = getUuid()
        body2.cts = getUuid()
        body2.sid = getUuid()
        body2.rsc = 1
        console.log(body2, 'body2')
        console.log(bodyFunc(secondRes), 'secondRes')
        request({
            url: 'https://collector-px3vk96i6i.px-cloud.net/api/v2/collector',
            proxy,
            headers,
            method: 'POST',
            body: qs.stringify(body2)
        }, function (error, res, body) {
            if (error) throw Error(error)
            console.log(body, 'body')
        })
    })
}

init()