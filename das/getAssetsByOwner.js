const axios = require('axios')
const url = `https://icarus.helius.xyz/?api-key=98db8a8f-a355-4d5d-9217-bb846fa10192`

const getAssetsByOwner = async () => {
    const { data } = await axios.post(url, {
      "jsonrpc": "2.0",
      "id": "hunter-test",
      "method": "getAssetsByOwner",
      "params": {
       "ownerAddress": "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
       "page": 1,
       "limit": 1000
     
        
      
      }
    });
    console.log("assets by owner: ", data.result);
  };
  

  getAssetsByOwner();