const env = require('./env-config.js');
const url = `https://api.helius.xyz/v0/token-metadata?api-key=${env.HELIUS_API_KEY}`
const nftAddresses = [
  "EFsxgAC1kyE1MWMDHuctCwogfiRUny8jLQaLnsCKDJFq"
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
