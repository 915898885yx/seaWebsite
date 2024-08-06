let cookie = {}
function dealCookie(cookie) {
    //cookie = "CSNUtId=23e17d3a-66b1-c066-a47f-3835ca24f802; expires=Tue, 19-Jan-2038 03:14:07 GMT; Max-Age=424558489; path=/; domain=.wayfair.com; secure, ExCSNUtId=23e17d3a-66b1-c066-a47f-3835ca24f802; expires=Tue, 19-Jan-2038 03:14:07 GMT; Max-Age=424558489; path=/; domain=.wayfair.com; secure; SameSite=None, vid=23e17d3a-66b1-c066-a47f-3835ca24f802; expires=Tue, 06-Aug-2024 09:19:18 GMT; Max-Age=10800; path=/; domain=.wayfair.com; secure, SFSID=afb0cadfc08d0590aaef0fd83b27aa98; path=/; domain=wayfair.com; HttpOnly, canary=0; expires=Tue, 19-Jan-2038 03:14:07 GMT; Max-Age=424558489; path=/; domain=.wayfair.com; secure, WFDC=DSM; expires=Tue, 06-Aug-2024 09:19:18 GMT; Max-Age=10800; path=/; domain=.wayfair.com; secure, serverUAInfo=%7B%22browser%22%3A%22Google%20Chrome%22%2C%22browserVersion%22%3A125%2C%22OS%22%3A%22Mac%20OS%20X%22%2C%22OSVersion%22%3A%22%22%2C%22isMobile%22%3Afalse%2C%22isTablet%22%3Afalse%2C%22isTouch%22%3Afalse%7D; path=/; domain=.wayfair.com; secure, CSN_CSRF=d7bbd35d8b1d22435452f621341fa62a71c02be609dc2f3cc9ec01a9ccd4ba1e; expires=Wed, 07-Aug-2024 06:19:18 GMT; Max-Age=86400; path=/; domain=.wayfair.com; secure; SameSite=Lax, CSNPersist=page_of_visit%3D2; expires=Tue, 19-Jan-2038 03:14:07 GMT; Max-Age=424558489; path=/; domain=wayfair.com; secure, __cf_bm=QmcmgHgzoyKLhNoE0TKf_xT8tHCjQTMsbpa7I70WMYI-1722925158-1.0.1.1-C2uDMoo6L4psC.Ut1HqqL.yPwsHD5M82esWkkGpfcJuvk8lGEyobbfEh.Md94bbJ1ONJSINaMnY3vE9CpdbR5w; path=/; expires=Tue, 06-Aug-24 06:49:18 GMT; domain=.wayfair.com; HttpOnly; Secure; SameSite=None";
    const res = cookie
    .replaceAll("path=", "")
    .replaceAll("domain=", "")
    .replaceAll("Max-Age=", "")
    .replaceAll("expires=", "")
    .replaceAll("SameSite=", "")
    .replaceAll(';', ',');
    let list = res.split(',').filter(item => item.includes('='));
    list.forEach(item => {
        const [key, value] = item.split('=');
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
async function getXparentTxid() {
  const url = "https://www.wayfair.com/v/account/authentication/login";
  const queryUrl = `https://www.wayfair.com/v/account/welcome/show?logout=${
    Math.ceil(Date.now() / 1000) - 70
  }`;
  const target = `${url}?url=${encodeURIComponent(queryUrl)}`;
  const myHeaders = new Headers();
  myHeaders.append(
    "accept",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  );
  myHeaders.append("accept-language", "zh-CN,zh;q=0.9");
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("pragma", "no-cache");
  myHeaders.append("priority", "u=0, i");
  myHeaders.append("referer", queryUrl);
  myHeaders.append(
    "sec-ch-ua",
    '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"'
  );
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", '"macOS"');
  myHeaders.append("sec-fetch-dest", "document");
  myHeaders.append("sec-fetch-mode", "navigate");
  myHeaders.append("sec-fetch-site", "same-origin");
  myHeaders.append("sec-fetch-user", "?1");
  myHeaders.append("upgrade-insecure-requests", "1");
  myHeaders.append(
    "user-agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
  );
  //myHeaders.append("Cookie", "CSNPersist=page_of_visit%3D2; CSNUtId=23e17d3a-66b1-bb13-aec7-adb7dd03ef02; CSN_CSRF=058439ec8dd28ce54dd4ee23fb16a577562733a875075d148a340fcd4a97a544; ExCSNUtId=23e17d3a-66b1-bb13-aec7-adb7dd03ef02; SFSID=ea110755f42a1403c356bb510aec7709; WFDC=DSM; __cf_bm=NO65EP3sY7H5MpI1quOB8Tug90PQe7G6.kv5b2YRjzA-1722923795-1.0.1.1-PojWpEFbPCgEslEg9o7kcd3mk_2jLwQywoR4z7RD88sOj4S9EY.p.cDbyLJnmoV00p6od3R1FTYSH8NYgliKfA; canary=0; serverUAInfo=%7B%22browser%22%3A%22Google%20Chrome%22%2C%22browserVersion%22%3A125%2C%22OS%22%3A%22Mac%20OS%20X%22%2C%22OSVersion%22%3A%22%22%2C%22isMobile%22%3Afalse%2C%22isTablet%22%3Afalse%2C%22isTouch%22%3Afalse%7D; vid=23e17d3a-66b1-bb13-aec7-adb7dd03ef02");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target, requestOptions)
    .then((response) => {
      if (response.status === 200) {
        const cookies = response.headers.get("Set-Cookie");
        console.log(cookies, "cookies", response.status);
        return response.text();
      }
      console.log(response.status);
    })
    .catch((error) => console.error(error));
}
// getXparentTxid()

async function login(options) {
  const { email, password, cookie } = options;
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("accept-language", "zh-CN,zh;q=0.9");
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("content-type", "application/json");
  myHeaders.append("origin", "https://www.wayfair.com");
  myHeaders.append("pragma", "no-cache");
  myHeaders.append("priority", "u=1, i");
  myHeaders.append(
    "referer",
    "https://www.wayfair.com/v/account/authentication/login?url=https%3A%2F%2Fwww.wayfair.com%2Fv%2Faccount%2Fwelcome%2Fshow%3Flogout%3D1722912391"
  );
  myHeaders.append(
    "sec-ch-ua",
    '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"'
  );
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", '"macOS"');
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "cors");
  myHeaders.append("sec-fetch-site", "same-origin");
  myHeaders.append(
    "user-agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
  );
  myHeaders.append("x-auth-caller-context", "auth_main_page_context");
  myHeaders.append("x-parent-txid", "I/cmXGaxkB6akobBl9s/Ag==");
  myHeaders.append("x-requested-with", "XMLHttpRequest");
  myHeaders.append(
    "Cookie",
    "CSNID=593B940E-B247-4541-B195-ADB34021F5F8; CSNUtId=23e17d3a-66b1-9e44-67f7-ca7c62234702; CSN_CSRF=9d15c4bf0a86e376969340fadd626dd3f08d712468e94929b482d10aac236f05; CSN_CT=eyJhbGciOiJSUzI1NiIsImtpZCI6InBlRG5BMWVVVGRVQU00YVdjU3FnZm40ZEJhbFZCYnJ4R2ZEU0ZQYXVQbG8iLCJ0eXAiOiJKV1QiLCJ4NXQiOiJtM2Y3ZHY4OFctQXA5dE5UZFVZYmxEbXc5TUUiLCJqa3UiOiJodHRwczovL3Nzby5hdXRoLndheWZhaXIuY29tLy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uL2p3a3MifQ.eyJuYmYiOjE3MjI5MTY0MjAsImV4cCI6MTcyMjkzMDgyMSwiaWF0IjoxNzIyOTE2NDIxLCJpc3MiOiJodHRwczovL3Nzby5hdXRoLndheWZhaXIuY29tLyIsImF1ZCI6ImF1dGhfaWRlbnRpdHkiLCJjbGllbnRfaWQiOiJ5NnZVV0dUd2dFVlA0VEFZbXZuTGxBIiwiY3VpZCI6IjYxMDg5MTQ3NzYiLCJzdWIiOiIyOTQ4MDY2MjQiLCJ2ZXJzaW9uIjoiMi4wIiwicGx0Ijoid2ViIiwicm9sZSI6InNmOmN1c3RvbWVyIiwianRpIjoiN0QwRjA2NjA1NzY2NzA2NTVEMzgyMzRBNUExN0Y5RDYiLCJzY29wZSI6Im9wZW5pZCBzZjpyZWNvZ25pemVkIHNmOnRydXN0ZWQgc2Y6dmVyaWZpZWQgb2ZmbGluZV9hY2Nlc3MiLCJhbXIiOlsicGFzc3dvcmQiXX0.e_yCcupUFrmYi0CnIFVrPWwWGe-hPwLW4qx368_OHxTwmD38kcwlH4amWUAimCi2Utyx2iVl6HEQVirdXEvNwnOJzMiHaApAqcQtXwEfFHzsvz4H5NDgVI2R86-aoJ44aRY4YGjjrLfTZv6hoFGx-91BR3Kcfga6TiAJzkRA5-l1fhmDkB3hsf0lYiPqI_9rj-b4PlY0ivRtwQC9ezWliGHzcE1ol574A7YyYap06LsRvgiF2blJut8Rwl8t2U7jNNU1bvgmRbr0UyFRABASnAlhtMr2DuESlgnUSiDqqCeq1_ppySPa-mt7ZGOVnZqEjvtmwYoeQFtNMukm_bKS_1UiqywtCulef6jfLOv3-k21d8FIzCGonaGl2N_ngghILtijgtqLKT2rT50XYUdS1kfwVkOv3nKWfAq8IZAXebW3FCMI47r9pekKy9ENF4WWpq0dnha_AqzWDrNhrw7o9yTSFo02HwNTGaDvy9tHdGgywh503FXrV4vOkzraJGiyxYoTaoYqvLqG92c-wTVBjk-FbmacbPftpeFvmjuHpnH6MW_jAWhklNapwGxszWHBJpYXqmlCVO1T3Q58E80SlWA5eW2Wrr3e6uaK-BWT9jmPyOJOZKiVdQqnMvmtAzs3TIyZsRxwKO94iRS9WKaKnyAg8EMUYWlEIL-dFroTK9c; CSN_RT=9EAAB196F4AF1FBD5BC21189E8ACA32E6A59CA15E1034C826B4CB5817F15CE86; ExCSNUtId=23e17d3a-66b1-9e44-67f7-ca7c62234702; SFSID=ff3f837e1efe81aaf584206788ee89ca; WFDC=DSM; __cf_bm=3ctEJXCpZmGYu2b1WaCOaKFBM3qA3eUzEcN6i.sL5LU-1722916422-1.0.1.1-Wt1R61VbutwehxDC_rC09YKG5iguMm9JJNGrEnCIi3zglsTcVDJT7bUqd0LgFpjAC8OtgszzsPmflJzFi_2aXg; canary=0; postalCode=67346; serverUAInfo=%7B%22browser%22%3A%22Google%20Chrome%22%2C%22browserVersion%22%3A125%2C%22OS%22%3A%22Mac%20OS%20X%22%2C%22OSVersion%22%3A%22%22%2C%22isMobile%22%3Afalse%2C%22isTablet%22%3Afalse%2C%22isTouch%22%3Afalse%7D; vid=23e17d3a-66b1-9e44-67f7-ca7c62234702"
  );

  const raw = JSON.stringify({
    email,
    password,
    grant_type: "PWD",
    page: "AccountLogin",
    recaptchaResponse: null,
    recaptchaSiteKey: null,
    step: "password",
    userDefaultedToPassword: false,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://www.wayfair.com/a/account/authentication/login",
    requestOptions
  )
    .then((response) => {
      let cookies = response.headers.get("Set-Cookie");
      console.log(response.status, "status");
      console.log(cookies, "cookies");
    })
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
