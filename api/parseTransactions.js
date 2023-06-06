const url = "https://api.helius.xyz/v0/addresses/M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K/transactions?api-key=<your-key>";

const parseTransactions = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("parsed transactions: ", data);
};

parseTransactions();
