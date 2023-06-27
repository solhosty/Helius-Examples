require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://api.helius.xyz/v0/token-metadata?api-key=${apiKey}`

const nftAddresses = [
  "DEVaumiRCw6USFwjL3kdn47Ubenpsu4iZjeDVrHznwqK"
]; // Monkes

const getMetadata = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mintAccounts: nftAddresses,
      includeOffChain: true,
      disableCache: false,
    }),
  });

  const data = await response.json();
  console.log("metadata: ", data);
};

getMetadata();
