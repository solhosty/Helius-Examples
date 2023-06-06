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
      method: 'getAsset',
      params: {
        id: 'B1rzqj4cEM6pWsrm3rLPCu8QwcXMn6H6bd7xAnk941dU',
      },
    }),
  });

  const { result } = await response.json();
  console.log("asset: ", result);
};

getAsset();