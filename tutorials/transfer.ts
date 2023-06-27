import { Keypair, Transaction, Connection, PublicKey } from "@solana/web3.js";
import { createTransferCheckedInstruction, getAssociatedTokenAddress } from "@solana/spl-token";
import * as bs58 from "bs58";
const apiKey = require('dotenv')

async function transfer() {
  // connection to Solana. 
const connection = new Connection(`https://rpc.helius.xyz/?api-key=${apiKey}`);

// Payer of new ATA. 
const feePayer = Keypair.fromSecretKey(
  bs58.decode("SK")
);

// Previous owner of Token or NFT
const prevOwner = Keypair.fromSecretKey(
  bs58.decode("SK")
);
const mintPubkey = new PublicKey("4umMdShNxbdnoV2EZjUp6h5GYYneZFLH9otBEU2K3ZYP");
const receiveAdress = new PublicKey('2xSHLfiPs3aEhzbLnYbyzWYMEaYnwSwJwAnVh5CwHWwX')
const tokenAccount1Pubkey = new PublicKey("CE2uTSeVbBhy2Q8qVEnp8qAJYBQkVxMC4uGzchiAn6gG");
let ata = await getAssociatedTokenAddress(
    mintPubkey, // mint
    receiveAdress // owner
  );
// Create transfer instruction to from the previous ATA owned by old wallet, to new ATA. 
const tokenAccount2Pubkey = new PublicKey(ata);
let tx = new Transaction();
  tx.add(
    createTransferCheckedInstruction(
      tokenAccount1Pubkey, // from
      mintPubkey, // mint
      tokenAccount2Pubkey, // to
      prevOwner.publicKey, // from's owner
      1, // amount
      0 // decimals
    )
  );
  // Send Transaction here. 
  console.log(`txhash: ${await connection.sendTransaction(tx, [feePayer, prevOwner])}`);
}

transfer()