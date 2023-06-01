const axios = require('axios')
const url = `https://icarus.helius.xyz/?api-key=98db8a8f-a355-4d5d-9217-bb846fa10192`

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