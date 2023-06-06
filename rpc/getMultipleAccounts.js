const env = require('./env-config.js');
const url = `https://rpc.helius.xyz/?api-key=${env.HELIUS_API_KEY}`;

const getMultipleAccounts = async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "jsonrpc": "2.0",
        "id": "hunter-test",
        "method": "getMultipleAccounts",
        "params": [
          [
            "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
            "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA",
            "5Axu9WgHfd32eJQf99ZTfL6p62ZwxH9dAhGMWfMG7LsE",
            "3jjqJhqY7YwGfWfH3tTuF7ixjxxLoerb1XDaMwrYhtHX",
            "DpzDvJ6NqDExouAfhjom3YyxRAu6nJJqPWgcw5fxXh7f",
            "7JpxqTbEUrV1NSFNKZMCCwxh37dv5e5jPvFVW7AKZmmG",
          ],
          {
            "dataSlice": {
              "offset": 0,
              "length": 0
            }
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("assets by owner PROD: ", data.result);
  } catch (error) {
    console.error(error);
  }
};

getMultipleAccounts();
