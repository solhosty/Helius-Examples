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
        method: "getProgramAccounts",
        params: [
          "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
          {
            encoding: "jsonParsed",
            commitment: "confirmed",
            filters: [{ memcmp: { offset: 0, bytes: "81PvQMqKDRR" } }],
          },
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
