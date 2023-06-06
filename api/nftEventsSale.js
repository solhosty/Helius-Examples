const url = `https://api.helius.xyz/v1/nft-events?api-key=<api_key>`;

const getSales = async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {
          sources: ["MAGIC_EDEN"],
          types: ["NFT_SALE"],
          nftCollectionFilters: {
            verifiedCollectionAddress: ["4mKSoDDqApmF1DqXvVTSL6tu2zixrSSNjqMxUnwvVzy2"]
          }
        }
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("y00ts sales: ", data.result);
  } catch (error) {
    console.error(error);
  }
};

getSales();
