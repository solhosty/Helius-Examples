const env = require('./env-config.js');
const url = `https://rpc.helius.xyz/?api-key=${env.HELIUS_API_KEY}`;

const getAsset = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetByOwner',
      params: {
        ownerAddress: 'F9Lw3ki3hJ7PF9HQXsBzoY8GyE6sPoEZZdXJBsTTD2rk',
        page: 1,
        limit: null,
        before: null,
        after: null,
        
      },
    }),
  });
  const { result } = await response.json();
  console.log("Asset: ", result);
  
};
getAsset();