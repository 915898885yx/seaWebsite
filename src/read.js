import fs from 'fs'
fs.readFile('./data.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log(err, 'err')
    }
})

export async function getUserList () {
    try {
        const data = fs.readFileSync('./data.txt', 'utf8')
        return data.split('\n')
    } catch (e) {
        throw('获取用户信息失败')
    }
}