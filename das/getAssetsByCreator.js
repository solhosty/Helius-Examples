const fs = require('fs');
const url = `https://rpc.helius.xyz/?api-key=8bb81828-2b6b-422e-8272-8ac173443412`;

const getAssetsByCreator = async () => {
  let page = 1;
  let allResults = [];
  let hasMoreResults = true;

  while (hasMoreResults) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'my-id',
        method: 'getAssetsByCreator',
        params: {
          creatorAddress: 'zvrsoq2LbNxekPqLK1v8DsLgeC4LHxMQL52beX8Ktn8',
          onlyVerified: true,
          page,
          limit: 1000,
        },
      }),
    });

    const { result } = await response.json();
    allResults = allResults.concat(result.items);

    if (result.items.length < 1000) {
      hasMoreResults = false;
    } else {
      page++;
    }
  }

  // Create an object to store the grouped results
  const groupedResults = {};

  for (let i = 0; i < allResults.length; i++) {
    const ownershipId = allResults[i].ownership.owner;
    const asset = {
      id: allResults[i].id,
      ownershipId: ownershipId,
    };

    if (groupedResults.hasOwnProperty(ownershipId)) {
      // Add the asset to the existing group
      groupedResults[ownershipId].assets.push(asset);
    } else {
      // Create a new group for the ownership ID
      groupedResults[ownershipId] = {
        assets: [asset],
      };
    }
  }

  // Convert the grouped results to JSON
  const json = JSON.stringify(groupedResults, null, 2);

  // Write the JSON to a file
  fs.writeFileSync('creatorResults.json', json);

  console.log('Results saved to results.json');
};

getAssetsByCreator();
