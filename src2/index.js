const init = async () => {
    const res = await fetch('https://www.wayfair.com/a/account/authentication/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'Connection': 'keep-alive',
            'Accept-Encoding': 'gzip, deflate, br',
            'origin': 'https://www.wayfair.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': `https://www.wayfair.com/v/account/authentication/login`,
            'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': "macOS",
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/244.178.44.111 Safari/537.36',
            'x-auth-caller-context': 'auth_main_page_context',
            'x-parent-txid': 'I+F9Ombxm6Y7z8F+tthDAg==',
            'x-requested-with': 'XMLHttpRequest'
        },
        body: JSON.stringify({
            'email': 'wvaiyr47381@chacuo.net',
            'grant_type': 'PWD',
            'page': "AccountLogin",
            'password': 'wvaiyr47381',
            'recaptchaResponse': null,
            'recaptchaSiteKey': null,
            'step': 'password',
            'userDefaultedToPassword': false
        })
    })
    console.log(res, 'res')
    let cookies = res.headers.get('Set-Cookie')
    // cookies = cookies.replace('')
    console.log(cookies, 'cookie')
}
init()

function getUa () {
    const str1 = 'Mozilla/5.0 (Windows NT {}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{} Safari/537.36'
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
    return str1 + ' ' + list1[Math.floor(Math.random() * list1.length)] + ' ' + list2[Math.floor(Math.random() * list2.length)]
}

def random_ua():
    return "Mozilla/5.0 (Windows NT {}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{} Safari/537.36".format(
        random.choice([
            '10.0; Win64; x64', '10.0; WOW64', '10.0',
            '6.2; WOW64', '6.2; Win64; x64', '6.2',
            '6.1', '6.1; Win64; x64', '6.1; WOW64'
        ]), random.choice([
            '70.0.3538.16', '70.0.3538.67', '70.0.3538.97', '71.0.3578.137', '71.0.3578.30', '71.0.3578.33',
            '71.0.3578.80', '72.0.3626.69', '72.0.3626.7', '73.0.3683.20', '73.0.3683.68', '74.0.3729.6',
            '75.0.3770.140', '75.0.3770.8', '75.0.3770.90', '76.0.3809.12', '76.0.3809.126', '76.0.3809.25',
            '76.0.3809.68', '77.0.3865.10', '77.0.3865.40', '78.0.3904.105', '78.0.3904.11', '78.0.3904.70',
            '79.0.3945.16', '79.0.3945.36', '80.0.3987.106', '80.0.3987.16', '81.0.4044.138', '81.0.4044.20',
            '81.0.4044.69', '83.0.4103.14', '83.0.4103.39', '84.0.4147.30', '85.0.4183.38', '85.0.4183.83',
            '85.0.4183.87', '86.0.4240.22', '87.0.4280.20', '87.0.4280.88', '88.0.4324.27'
        ]))