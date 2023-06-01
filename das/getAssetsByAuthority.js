const axios = require('axios')
const url = `https://icarus.helius.xyz/?api-key=f8ec32a6-4f01-4345-afb5-d993bf50b77d`

const getAssetsByAuthority = async () => {
    const { data } = await axios.post(url, {
      "jsonrpc": "2.0",
      "id": "my-id",
      "method": "getAssetsByAuthority",
      "params": {
        "authorityAddress": "CrxcwAPcwLnxn8RGvG3SUFMwqxVwQZheNoeeVRULFdF4",
        "page": 1,
        "limit": 2
      }
    });
    console.log("assets by authority: ", data.result);
    const items = data.result.items;
    items.forEach((item: { ownership: any; }) => {
    const ownership = item.ownership;
    console.log(ownership);
    });
  };

  const runEvery10Seconds = () => {
    getAssetsByAuthority();
    setTimeout(runEvery10Seconds, 10000); // 10 seconds in milliseconds
  };
  
  runEvery10Seconds();