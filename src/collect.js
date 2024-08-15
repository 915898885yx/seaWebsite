import request from 'request'
import { initPostData } from './main.js'
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

function _body (value) {
    const urlencoded = new URLSearchParams();
    value.split('&').forEach(item => {
        const [key, value] = item.split('=')
        urlencoded.append(key, value)
    })
    return urlencoded
}

async function init () {
    const { postData } = await initPostData()
    const urlencoded = _body(postData)
    console.log(urlencoded, 'postData')
    request({
        url: 'https://collector-px3vk96i6i.px-cloud.net/api/v2/collector',
        proxy,
        headers,
        method: 'POST',
        body: postData
    }, function (error, res, body) {
        console.log(error, 'error')
        // console.log(res)
        console.log(body, 'body')
    })
}

init()