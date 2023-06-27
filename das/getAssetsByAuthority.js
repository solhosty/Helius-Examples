require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://rpc.helius.xyz/?api-key=${apiKey}`;

const getAssetsByAuthority = async () => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'my-id',
        method: 'getAssetsByAuthority',
        params: {
          authorityAddress: '2RtGg6fsFiiF1EQzHqbd66AhW7R5bWeQGpTbv2UMkCdW',
          page: 1, // Starts at 1
          limit: 1000
        },
      }),
    });
    const { result } = await response.json();
    console.log("Assets by Authority: ", result.items);
};
getAssetsByAuthority(); 