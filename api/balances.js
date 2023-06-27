require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://api.helius.xyz/v0/addresses/41zCUJsKk6cMB94DDtm99qWmyMZfp4GkAhhuz4xTwePu/balances?api-key=${apiKey}`;

const getBalances = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(response)
      throw new Error('Network response was not ok');
      
    }
    const data = await response.json();
    console.log("balances: ", data);
  } catch (error) {
    console.error(response);
  }
};
getBalances();
