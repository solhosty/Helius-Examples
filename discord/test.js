const {
  Connection,
  PublicKey,
  Keypair,
  Transaction,
} = require("@solana/web3.js");
const {
  createAssociatedTokenAccountInstruction,
  createTransferCheckedInstruction,
  transferChecked,
  getAccount,
  getAssociatedTokenAddress
} = require("@solana/spl-token");
const bs58 = require("bs58");


(async () => {
  const connection = new Connection("https://rpc.helius.xyz/?api-key=8bb81828-2b6b-422e-8272-8ac173443412", "confirmed");
  const feePayer = Keypair.fromSecretKey(
    bs58.decode(
      "2x4Fif9famabHBNy1fVtePt7XEnsGMRDNnzTYFW55nUpGco9VMx35zRaYPvamFm2vrZetWnvTLb5upGMSbEwdrA8"
    )
  );
  const newWallet = Keypair.fromSecretKey(
    bs58.decode(
      "4yvk7MbPc8k1wdqGnBZEXUG2Cegg79FZBLAA1s5U6uwCp9gXMhPKZaT1nTgXvbCDcg9j9BhDwxkUfkZUDchJoq7K"
    )
  );
  const mintPubkey = new PublicKey(
    "4umMdShNxbdnoV2EZjUp6h5GYYneZFLH9otBEU2K3ZYP"
  );
  const prevAta = new PublicKey("CE2uTSeVbBhy2Q8qVEnp8qAJYBQkVxMC4uGzchiAn6gG")
  let tokenAccount = await getAccount(connection, prevAta);
  console.log(`tokenAccount: ${tokenAccount}`);
  let ata = await getAssociatedTokenAddress(
    mintPubkey, // mint
    newWallet.publicKey // owner
  );
  console.log(`ATA: ${ata.toBase58()}`);
  let tx = new Transaction().add(
    createAssociatedTokenAccountInstruction(
      feePayer.publicKey, // payer
      ata, // ata
      newWallet.publicKey, // owner
      mintPubkey // mint
    )
  );
  console.log(`txhash: ${await connection.sendTransaction(tx, [feePayer])}`);
  let txhash = await transferChecked(
    connection, // connection
    feePayer, // payer
    tokenAccount, // from (should be a token account)
    mintPubkey, // mint
    ata, // to (should be a token account)
    newWallet, // from's owner
    1, // amount, if your deciamls is 8, send 10^8 for 1 token
    0 // decimals
  );
  console.log(`txhash: ${txhash}`);
  let tx2 = new Transaction().add(
    createTransferCheckedInstruction(
      prevAta, // from (should be a token account)
      mintPubkey, // mint
      ata, // to (should be a token account)
      newWallet, // from's owner
      1, // amount, if your deciamls is 8, send 10^8 for 1 token
      0 // decimals
    )
  );
  console.log(
    `txhash: ${await connection.sendTransaction(tx2, [
      feePayer,
      newWallet /* fee payer + owner */,
    ])}`
  );


})();
