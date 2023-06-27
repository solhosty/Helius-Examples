require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;

const url = `https://api.helius.xyz/v0/addresses/41zCUJsKk6cMB94DDtm99qWmyMZfp4GkAhhuz4xTwePu/transactions?api-key=${apiKey}`

const parseTransactions = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("tensor transactions: ", data);
};

parseTransactions();
