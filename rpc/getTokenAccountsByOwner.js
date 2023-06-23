const url = `https://rpc.helius.xyz/?api-key=8bb81828-2b6b-422e-8272-8ac173443412`;

const getProgramAccounts = async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "hunter-test",
        method: "getTokenAccountsByOwner",
        params: [
          "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
          { programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" },
          { encoding: "jsonParsed", commitment: "confirmed" },
        ],
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("assets by owner: ", data.result);
  } catch (error) {
    console.error(error);
  }
};

getProgramAccounts();
