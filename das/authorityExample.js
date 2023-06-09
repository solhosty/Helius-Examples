const fs = require('fs');
require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://rpc.helius.xyz/?api-key=${apiKey}`;
const totalResults = [];

const getAssetsByAuthority = async () => {
  let page = 1;
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
        method: 'getAssetsByAuthority',
        params: {
          authorityAddress: 'CDgbhX61QFADQAeeYKP5BQ7nnzDyMkkR3NEhYF2ETn1k',
          page,
          limit: 1000,
        },
      }),
    });

    const { result } = await response.json();
    totalResults.push(...result.items);

    if (result.items.length < 1000) {
      hasMoreResults = false;
    } else {
      page++;
    }
  }  
  // Create new array to hold the desired properties
  const modifiedResults = totalResults.map(item => ({
    id: item.id,
    owner: item.ownership.owner
  }));
  // Create a root object to hold the count and the results
  const root = {
    count: modifiedResults.length,
    results: modifiedResults
  };
  // Stringify with 2 spaces indentation for readability
  const jsonResult = JSON.stringify(root, null, 2);

  fs.writeFile('./authorityResults.json', jsonResult, 'utf8', (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log("JSON file saved successfully.");
    }
  });
console.log("Process completed.");
};
getAssetsByAuthority()