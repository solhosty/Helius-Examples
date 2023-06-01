const axios = require("axios");
const url = `http://216.128.146.246/?api-key=98db8a8f-a355-4d5d-9217-bb846fa10192`;
const url2 = 'https://rpc.helius.xyz/?api-key=db89bbee-9da7-4844-8aa6-8840d7aa8c27';


const getAccountInfo1 = async () => {
  const { data } = await axios.post(url2, {
    jsonrpc: "2.0",
    id: "hunter-test-prod",
    method: "getMultipleAccounts",
    params: [
      "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
      {
        encoding: "jsonParsed",
      },
    ],
  });
  console.log("assets by owner PROD: ", data.result);
};

getAccountInfo1();