import fs from 'fs'
export function getUserList () {
  try {
    const data = fs.readFileSync('./data.txt', 'utf8')
    // console.log(data, 'data')
    return data.split('\n')
  } catch (e) {
    throw('获取用户信息失败')
  }
}

export function writeUserInfoToResult (result) {
  try {
    fs.writeFileSync('./result.txt', result + '\n', 'utf8')
  } catch (e) {
    console.log('写入用户信息失败')
  }
}