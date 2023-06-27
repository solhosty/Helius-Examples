require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://rpc.helius.xyz/?api-key=${apiKey}`;
const fs = require('fs');
const uniqueMints = new Set();

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
          groupValue: '3CH5327ExtR91zCBCFQR3AeFD2F1mEdDMCJd6dox63Wh',
          page,
          limit: 1000,
        },
      }),
    });

    const { result } = await response.json();

    // Add each owner to the Set, automatically discarding duplicates
    result.items.forEach(item => uniqueMints.add(item.id));

    if (result.items.length < 1000) {
      hasMoreResults = false;
    } else {
      page++;
    }
  }

  // Convert Set to Array for stringification
  const uniqueMintsArray = Array.from(uniqueMints);
  
  const root = {
    count: uniqueMints.size,
    mints: uniqueMintsArray
  };
  
  const jsonResult = JSON.stringify(root, null, 2);

  fs.writeFile('./mintList.json', jsonResult, 'utf8', (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log("JSON file saved successfully.");
    }
  });
  console.log("Total number of unique mints:", uniqueMints.size);
};

getAssetsByGroup();
