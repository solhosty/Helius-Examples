const url = `https://icarus.helius.xyz/?api-key=11620a64-313a-47e1-b199-67d9a3b4b0d8`;

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
        id: 'F9Lw3ki3hJ7PF9HQXsBzoY8GyE6sPoEZZdXJBsTTD2rk'
      },
    }),
  });
  const { result } = await response.json();
  console.log("Asset: ", result);
};
getAsset();