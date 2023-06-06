const url = `https://icarus.helius.xyz/?api-key=98db8a8f-a355-4d5d-9217-bb846fa10192`;

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