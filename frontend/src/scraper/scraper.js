const axios = require('axios')
const cheerio = require('cheerio')


// async function getRate() {

//     try {
//         let { data } = await axios.get(`https://fx-rate.net/USD/ZAR/`)
//         let $ = cheerio.load(data)

//         console.log($('[class="tpl_box"]').first().text())

//     } catch(error) {
//         throw error
//     }
// }

async function getInfo() {

    try {
        let { data } = await axios.get(`https://www.livecoinwatch.com/price/Bitcoin-BTC`)
        let $ = cheerio.load(data)

        console.log($('span[class="price"]').first().text().substring(1))

    } catch(error) {
        throw error
    }
}

module.exports getInfo

//setInterval( getInfo, 1500 )
// setInterval( getRate, 2000 )