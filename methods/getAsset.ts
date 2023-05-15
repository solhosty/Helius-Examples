const axios = require('axios')
const url = `https://icarus.helius.xyz/?api-key=f8ec32a6-4f01-4345-afb5-d993bf50b77d`

const getAsset = async () => {
  const { data } = await axios.post(url, {
    "jsonrpc": "2.0",
    "id": "my-id",
    "method": "getAsset",
    "params": {
      "id": "F9Lw3ki3hJ7PF9HQXsBzoY8GyE6sPoEZZdXJBsTTD2rk"
    }
  });
  console.log("asset: ", data.result);
};

getAsset();

const runEvery10Seconds = () => {
  getAsset();
  setTimeout(runEvery10Seconds, 10000); // 10 seconds in milliseconds
};

runEvery10Seconds();