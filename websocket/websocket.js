const solanaWeb3 = require('@solana/web3.js')

const connection = new solanaWeb3.Connection("https://rpc.helius.xyz?api-key=8bb81828-2b6b-422e-8272-8ac173443412");

(async () => {
  connection.onAccountChange(
    new solanaWeb3.PublicKey("5yv6Vh8FNx93TXeSS94xy8VLZMbTqx4vXp7Zg5bDLZtE"),
    (updatedAccountInfo, context) =>
      console.log("Updated account info: ", updatedAccountInfo),
    "confirmed"
  );
})();