const accountWebhook = async () => {
    try {
      const response = await fetch(
        "https://rpc.helius.xyz/?api-key=8bb81828-2b6b-422e-8272-8ac173443412",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "webhookURL": "https://TestServer.test.repl.co/webhooks",
            "accountAddresses": ["M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K"],
            "accountAddressOwners": [],
            "encoding": "jsonParsed",
            "webhookType": "account"
       }),
        }
      );
      const data = await response.json();
      console.log({ data });
    } catch (e) {
      console.error("error", e);
    }
  };
  accountWebhook();