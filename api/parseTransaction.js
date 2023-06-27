require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://api.helius.xyz/v0/transactions/?api-key=${apiKey}`;

const parseTransaction = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      transactions: ["Qq9xzvdHUSgPvXDiw63RyTiPgjQ99prLuvuXfipxtuVZ86zCT2MBUMtAAtxQdXwEuu1ZcuPRqsgbxxJ6KxFrYpW"],
    }),
  });

  const data = await response.json();
  console.log("parsed transaction: ", data);
};

parseTransaction();
