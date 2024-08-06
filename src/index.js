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