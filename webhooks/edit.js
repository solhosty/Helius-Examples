const editWebhook = async () => {
    try {
      const response = await fetch(
        "https://api.helius.xyz/v0/webhooks/<webhook-id>?api-key=8bb81828-2b6b-422e-8272-8ac173443412",
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            webhookURL: "https://typedwebhook.tools/webhook/dfb45a88-c361-4c06-84d8-e728588b8907",
            transactionTypes: [
              "Any"
            ],
            accountAddresses: [
              "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha"
            ],
            webhookType: "enhanced"
          }),
        }
      );
      const data = await response.json();
      console.log({ data });
    } catch (e) {
      console.error("error", e);
    }
  };
  editWebhook();