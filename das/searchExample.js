require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://rpc.helius.xyz/?api-key=${apiKey}`;
const fs = require('fs');

const searchAssets = async () => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "my-id",
      method: "searchAssets",
      params: {
        // Returning only compressed items.
      
        // Example wallet
        burnt: true,
        // Drip Haus collection ID.
        grouping: [
          "collection",
          "SMBtHCCC6RYRutFEPb4gZqeBLUZbMNhRKaMKZZLHi7W"
        ],
        page: 1,
      },
    }),
  });
  const { result } = await response.json();
  console.log(result)

  const groupedResults = [];

  for (let i = 0; i < result.items.length; i++) {
    const asset = {
      id: result.items[i].id,
      name: result.items[i].content.metadata.name,
      json_uri: result.items[i].content.json_uri,
    };

    // Find an existing group for the asset if it exists
    const existingGroup = groupedResults.find(group => group.id === asset.id);

    if (existingGroup) {
      // Add the asset to the existing group
      existingGroup.assets.push(asset);
    } else {
      // Create a new group for the asset
      const newGroup = {
        id: asset.id,
        assets: [asset],
      };

      // Add the new group to the grouped results
      groupedResults.push(newGroup);
    }
  }

  // Convert the grouped results to JSON
  const json = JSON.stringify(groupedResults, null, 2);

  // Write the JSON to a file
  fs.writeFileSync('results.json', json);

  console.log('Results saved to results.json');
};

searchAssets();
