import request from "request";

// const proxy = 'http://65773079-zone-custom-region-US:xuanzi666@first.proxys5.net:6200'
// const proxy = 'http://76xf70sORd-zone-mars-region-US:35527311@na.3cfb97945f46ee2a.ipmars.vip:4900'
const proxy = 'http://65773079-zone-custom-region-US:xuanzi666@first.proxys5.net:6200'

request({
    url: 'https://2024.ip138.com/',
    method: 'GET',
    proxy,
}, function (error, res, body) {
    console.log(error, 'error')
    console.log(res, 'res')
    console.log(body, 'body')
})