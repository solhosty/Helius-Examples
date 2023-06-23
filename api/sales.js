const url = `https://api.helius.xyz/v1/nft-events?api-key=8bb81828-2b6b-422e-8272-8ac173443412`;

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
