const url = "https://api.helius.xyz/v0/token-metadata?api-key=11620a64-313a-47e1-b199-67d9a3b4b0d8"
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
