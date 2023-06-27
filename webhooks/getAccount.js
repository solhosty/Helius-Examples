require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;

const editWebhook = async () => {
  try {
    const response = await fetch(
      `https://api.helius.xyz/v0/webhooks/?api-key=${apiKey}`,
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