const url = `https://icarus.helius.xyz/?api-key=98db8a8f-a355-4d5d-9217-bb846fa10192`;
const fs = require('fs');

const getAssetsByOwner = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'hunter-test',
      method: 'getAssetsByOwner',
      params: {
					// Example wallet
        ownerAddress: '2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha',
        page: 1,
      },
    }),
  });
 const { result } = await response.json();
 const groupedResults = {};

  for (let i = 0; i < result.items.length; i++) {
    const ownerAddress = "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha";
    const asset = {
      id: result.items[i].id,
      name: result.items[i].content.metadata.name,
      json_uri: result.items[i].content.json_uri,
    };

    if (groupedResults.hasOwnProperty(ownerAddress)) {
      // Add the asset to the existing group
      groupedResults[ownerAddress].assets.push(asset);
    } else {
      // Create a new group for the owner
      groupedResults[ownerAddress] = {
        assets: [asset],
      };
    }
  }

  // Convert the grouped results to JSON
  const json = JSON.stringify(groupedResults, null, 2);

  // Write the JSON to a file
  fs.writeFileSync('ownerResults.json', json);

  console.log('Results saved to results.json');
};

getAssetsByOwner();