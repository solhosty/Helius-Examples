require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://rpc.helius.xyz/?api-key=${apiKey}`;

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
        id: '8LFoSTjwGjUtuf2aGnGHspC26nYZ8pScysiK8Y7DBqjD'
      },
    }),
  });
  const { result } = await response.json();
  console.log("Asset: ", result);
};
getAsset();