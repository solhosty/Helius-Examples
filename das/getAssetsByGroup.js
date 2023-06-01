const axios = require('axios')
const url = `https://rpc-devnet.helius.xyz/?api-key=8bb81828-2b6b-422e-8272-8ac173443412`

const getAssetsByGroup = async () => {
    const { data } = await axios.post(url, {
      "jsonrpc": "2.0",
      "id": "my-id",
      "method": "getAssetsByGroup",
      "params": {
          "groupKey": "collection",
          "groupValue": "5vkfdUg1gz4grB93t17jNx6xVEp6QFrHia2paVeKNyXi",
          "page": 1,
          "limit": 1000
      }
    });
    console.log(data.result.items[0].content.metadata)
  };
getAssetsByGroup();