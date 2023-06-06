const env = require('./env-config.js');
const url = `https://rpc.helius.xyz/?api-key=${env.HELIUS_API_KEY}`;

const getAccountInfo1 = async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "hunter-test-prod",
        method: "getMultipleAccounts",
        params: [
          "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
          {
            encoding: "jsonParsed",
          },
        ],
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("assets by owner PROD: ", data.result);
  } catch (error) {
    console.error(error);
  }
};

getAccountInfo1();
