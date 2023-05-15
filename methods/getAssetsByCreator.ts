const axios = require('axios')
const url = `https://icarus.helius.xyz/?api-key=f8ec32a6-4f01-4345-afb5-d993bf50b77d`

const getAssetsByCreator = async () => {
  const { data } = await axios.post(url, {
    "jsonrpc": "2.0",
    "id": "hunter-test",
    "method": "getAssetsByCreator",
    "params": {
      "creatorAddress": "D3XrkNZz6wx6cofot7Zohsf2KSsu2ArngNk8VqU9cTY3",
      "onlyVerified": true,
      "page": 1,
      "limit": 1000
    },
  });
  console.log("assets by creator: ", data.result);
  const items = data.result.items;
  items.forEach((item: { ownership: any; }) => {
    const ownership = item.ownership;
    console.log(ownership);
  });
};

// Function to call getAssetsByCreator and wait for 10 seconds
const runEvery10Seconds = () => {
  getAssetsByCreator();
  setTimeout(runEvery10Seconds, 10000); // 10 seconds in milliseconds
};

runEvery10Seconds();