const url = `https://api.helius.xyz/v0/token-metadata?api-key=8bb81828-2b6b-422e-8272-8ac173443412`
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
