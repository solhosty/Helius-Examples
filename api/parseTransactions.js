const url = `https://api.helius.xyz/v0/addresses/tS2srkdCZeqnzrFt25PbBFg4KoVJB4WtPUJnVidsY4p/transactions?api-key=8bb81828-2b6b-422e-8272-8ac173443412`

const parseTransactions = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("tensor transactions: ", data);
};

parseTransactions();
