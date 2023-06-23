const createProgramWebhook = async () => {
    try {
      const response = await fetch(
        "https://api.helius.xyz/v0/webhooks?api-key=8bb81828-2b6b-422e-8272-8ac173443412",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            webhookURL: "https://your-webhook-server.com/your-endpoint",
            accountAddresses: [],
            accountAddressOwners: ["PASTE YOUR PROGRAM ADDRESS HERE"],
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
  
  createProgramWebhook();
  