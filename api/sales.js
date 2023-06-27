require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://api.helius.xyz/v1/nft-events?api-key=${apiKey}`;

const getSales = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {
        sources: ["MAGIC_EDEN"],
        types: ["NFT_SALE"],
        nftCollectionFilters: {
          // y00ts collection address
          verifiedCollectionAddress: ["4mKSoDDqApmF1DqXvVTSL6tu2zixrSSNjqMxUnwvVzy2"],
        },
      },
    }),
  });

  const { result } = await response.json();
  console.log("y00ts sales: ", result);
};

getSales();
