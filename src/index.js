// import axios from 'axios'

function init () {
    axios({
        method: 'post',
        url: 'https://api.victoriassecret.com/auth/v27/sign-in',
        data: {
            "email": "adingwall@charter.net",
            "password": "123456",
            "source": "VS",
            "isKMSIChecked": false,
            "pingRequest": {
                "riskPayload": ""
            }
        },
        headers: {
            origin: 'https://www.victoriassecret.com',
            pragma: 'no-cache'
        }
    }).then(res => {
        console.log(res, 'res')
    })
}

init()