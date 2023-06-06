const url = `https://icarus.helius.xyz/?api-key=98db8a8f-a355-4d5d-9217-bb846fa10192`;
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
        compressed: true,
        // Example wallet
        ownerAddress: "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
        // Drip Haus collection ID.
        grouping: [
          "collection",
          "DRiP2Pn2K6fuMLKQmt5rZWyHiUZ6WK3GChEySUpHSS4x"
        ],
        page: 1,
      },
    }),
  });
  const { result } = await response.json();

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
