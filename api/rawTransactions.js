const url = `https://api.helius.xyz/v0/addresses/tS2srkdCZeqnzrFt25PbBFg4KoVJB4WtPUJnVidsY4p/raw-transactions?api-key=8bb81828-2b6b-422e-8272-8ac173443412`;

const rawTransactions = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("raw transactions: ", data[0]);
};

rawTransactions();
