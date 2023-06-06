const createWebhook = async () => {
    try {
      const response = await fetch(
        "https://api.helius.xyz/v0/webhooks?api-key=<PASTE YOUR API KEY HERE>",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            webhookURL: "https://your-webhook-server.com/your-endpoint",
            accountAddresses: ["PASTE A SOLANA ACCOUNT ADDRESS HERE"],
            accountAddressOwners: [],
            webhookType: "account",
          }),
        }
      );
  
      const data = await response.json();
      console.log({ data });
    } catch (e) {
      console.error("error", e);
    }
  };
  
  createWebhook();
  