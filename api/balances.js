const axios = require('axios')

const url = "https://api.helius.xyz/v0/addresses/<address>/balances?api-key=<your-key>"
const getBalances = async () => {
  const { data } = await axios.get(url)
  console.log("balances: ", data)
}
getBalances()