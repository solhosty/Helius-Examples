const editWebhook = async () => {
  try {
    const response = await fetch(
      "https://api.helius.xyz/v0/webhooks/?api-key=8bb81828-2b6b-422e-8272-8ac173443412",
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
       
       
      }
    );
    const data = await response.json();
    console.log({ data });
    console.log(data.transactionTypes)
  } catch (e) {
    console.error("error", e);
  }
};
editWebhook();