require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://api.helius.xyz/v1/nft-events?api-key=${apiKey}`;

const getNftEvents = async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {
          accounts: ["DEVaumiRCw6USFwjL3kdn47Ubenpsu4iZjeDVrHznwqK"],
        }
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("events: ", data.result);
  } catch (error) {
    console.error(error);
  }
};

getNftEvents();
