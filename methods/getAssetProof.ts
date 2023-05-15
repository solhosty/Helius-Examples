const axios = require('axios')
const url = `https://icarus.helius.xyz/?api-key=f8ec32a6-4f01-4345-afb5-d993bf50b77d`

const getAssetProof = async () => {
    const { data } = await axios.post(url, {
      "jsonrpc": "2.0",
      "id": "my-id",
      "method": "getAssetProof",
      "params": {
        "id": "Bu1DEKeawy7txbnCEJE4BU3BKLXaNAKCYcHR4XhndGss"
      }
    });
    console.log("asset proof: ", data.result);
  };

  const runEvery10Seconds = () => {
    getAssetProof();
    setTimeout(runEvery10Seconds, 10000); // 10 seconds in milliseconds
  };
  
  runEvery10Seconds();