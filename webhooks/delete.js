const deleteWebhook = async () => {
    try {
      const response = await fetch(
        "https://api.helius.xyz/v0/webhooks/<webhook-id>?api-key=8bb81828-2b6b-422e-8272-8ac173443412",
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      console.log({ data });
    } catch (e) {
      console.error("error", e);
    }
  };
  deleteWebhook();