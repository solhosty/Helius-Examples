const url = `https://icarus.helius.xyz/?api-key=98db8a8f-a355-4d5d-9217-bb846fa10192`

const getAssetProof = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetProof',
      params: {
        id: 'Bu1DEKeawy7txbnCEJE4BU3BKLXaNAKCYcHR4XhndGss'
      },
    }),
  });
  const { result } = await response.json();
  console.log("Assets Proof: ", result);
};
getAssetProof(); 