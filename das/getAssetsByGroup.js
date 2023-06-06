const url = `https://icarus.helius.xyz/?api-key=98db8a8f-a355-4d5d-9217-bb846fa10192`;
const fs = require('fs');
const uniqueOwners = new Set();

const getAssetsByGroup = async () => {
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
        method: 'getAssetsByGroup',
        params: {
          groupKey: 'collection',
          groupValue: 'SMBtHCCC6RYRutFEPb4gZqeBLUZbMNhRKaMKZZLHi7W',
          page,
          limit: 1000,
        },
      }),
    });

    const { result } = await response.json();

    // Add each owner to the Set, automatically discarding duplicates
    result.items.forEach(item => uniqueOwners.add(item.ownership.owner));

    if (result.items.length < 1000) {
      hasMoreResults = false;
    } else {
      page++;
    }
  }

  // Convert Set to Array for stringification
  const uniqueOwnersArray = Array.from(uniqueOwners);
  
  const root = {
    count: uniqueOwners.size,
    owners: uniqueOwnersArray
  };
  
  const jsonResult = JSON.stringify(root, null, 2);

  fs.writeFile('./ownerResults.json', jsonResult, 'utf8', (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log("JSON file saved successfully.");
    }
  });
  console.log("Total number of unique owners:", uniqueOwners.size);

};

getAssetsByGroup();
