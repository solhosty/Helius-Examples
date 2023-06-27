const solanaWeb3 = require('@solana/web3.js')
require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const connection = new solanaWeb3.Connection(`https://rpc.helius.xyz?api-key=${apiKey}`);

(async () => {
  connection.onAccountChange(
    new solanaWeb3.PublicKey("5yv6Vh8FNx93TXeSS94xy8VLZMbTqx4vXp7Zg5bDLZtE"),
    (updatedAccountInfo, context) =>
      console.log("Updated account info: ", updatedAccountInfo),
    "confirmed"
  );
})();