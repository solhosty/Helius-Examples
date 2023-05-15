const axios = require('axios')
const url = `https://icarus.helius.xyz/?api-key=8bb81828-2b6b-422e-8272-8ac173443412`

const searchAssets = async () => {
    const { data } = await axios.post(url, {
      "jsonrpc": "2.0",
      "id": "my-id",
      "method": "searchAssets",
      "params": {
       "ownerAddress": "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
       "royaltyAmount": 0,
        "page": 1,
        "limit": 5
      }
    });
    console.log("All compressed assets: ", data.result);
  };
  
  const runEvery10Seconds = () => {
    searchAssets();
    setTimeout(runEvery10Seconds, 10000); // 10 seconds in milliseconds
  };
  
  runEvery10Seconds();