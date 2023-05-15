const axios = require('axios')
const url = `https://icarus.helius.xyz/?api-key=f8ec32a6-4f01-4345-afb5-d993bf50b77d`

const getAssetsByOwner = async () => {
    const { data } = await axios.post(url, {
      "jsonrpc": "2.0",
      "id": "my-id",
      "method": "getAssetsByOwner",
      "params": {
       "ownerAddress": "86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY",
        "page": 1,
        "limit": 2
      }
    });
    console.log("assets by owner: ", data.result);
  };
  

  const runEvery10Seconds = () => {
    getAssetsByOwner();
    setTimeout(runEvery10Seconds, 10000); // 10 seconds in milliseconds
  };
  
  runEvery10Seconds();