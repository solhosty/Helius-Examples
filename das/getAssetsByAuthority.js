const fs = require('fs');

const url = `https://icarus.helius.xyz/?api-key=11620a64-313a-47e1-b199-67d9a3b4b0d8`;
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