const axios = require('axios')
const url = `https://rpc.helius.xyz/?api-key=8bb81828-2b6b-422e-8272-8ac173443412`

const getAssetsByGroup = async () => {
    const { data } = await axios.post(url, {
      "jsonrpc": "2.0",
      "id": "my-id",
      "method": "getAssetsByGroup",
      "params": {
       "groupKey": "collection",
        "groupValue": "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
        "page": 1,
        "limit": 1000
      }
    });
    const items = data.result.items;
    items.forEach((item: { ownership: any; }) => {
    const ownership = item.ownership;
    console.log(ownership);
  });
  };
  
  const runEvery10Seconds = () => {
    getAssetsByGroup();
    setTimeout(runEvery10Seconds, 10000); // 10 seconds in milliseconds
  };
  
  runEvery10Seconds();