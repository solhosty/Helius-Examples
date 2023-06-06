const env = require('./env-config.js');
const url = `https://api.helius.xyz/v0/transactions/?api-key=${env.HELIUS_API_KEY}`;

const parseTransaction = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      transactions: ["your-txn-id-here"],
    }),
  });

  const data = await response.json();
  console.log("parsed transaction: ", data);
};

parseTransaction();
