const url = `https://rpc.helius.xyz/?api-key=8bb81828-2b6b-422e-8272-8ac173443412`;

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
        id: '6m82p33tce8GYMnbKhdGDGHjCNofS5csXmqjHt65kp4g'
      },
    }),
  });
  const { result } = await response.json();
  console.log("Asset: ", result);
};
getAsset();