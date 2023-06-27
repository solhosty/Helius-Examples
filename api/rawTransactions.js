require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://api.helius.xyz/v0/addresses/tS2srkdCZeqnzrFt25PbBFg4KoVJB4WtPUJnVidsY4p/raw-transactions?api-key=${apiKey}`;

const rawTransactions = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("raw transactions: ", data[0]);
};

rawTransactions();
