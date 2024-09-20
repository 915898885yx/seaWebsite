// https://www.funyball.com/
import cloudscraper from "cloudscraper";
const init = async () => {
    const res = await cloudscraper.get("https://www.funyball.com")
    console.log(res.body)
    // const text = await res.text()
    // console.log(text, 'text')
}

init()
