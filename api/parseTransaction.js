const url = "https://api.helius.xyz/v0/transactions/?api-key=<your-key>";

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
