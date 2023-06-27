require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;


const deleteWebhook = async () => {
    try {
      const response = await fetch(
        `https://api.helius.xyz/v0/webhooks/<webhook-id>?api-key=${apiKey}`,
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