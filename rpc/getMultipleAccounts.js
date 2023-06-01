const axios = require('axios')
const url = `http://216.128.146.246/?api-key=98db8a8f-a355-4d5d-9217-bb846fa10192`
const url2 = 'https://rpc.helius.xyz/?api-key=db89bbee-9da7-4844-8aa6-8840d7aa8c27'

const getMultipleAccounts = async () => {
    const { data } = await axios.post(url, {
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
    });
    console.log("assets by owner PROD: ", data.result);
  };
  getMultipleAccounts();

  const getMultipleAccounts2 = async () => {
    const { data } = await axios.post(url2, {
      "jsonrpc": "2.0",
      "id": "hunter-test-prod",
      "method": "getMultipleAccounts",
      "params": [
        [
            "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
        
          ],
        {
          "dataSlice": {
            "offset": 0,
            "length": 0
          }
        }
      ]
    });
    console.log("assets by owner PROD: ", data.result.value.data);
  };
  

  getMultipleAccounts2();