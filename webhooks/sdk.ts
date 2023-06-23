import {
    // enums
    Address,
    TransactionType,
    
    // lib
    Helius,
} from "helius-sdk";

const helius = new Helius("8bb81828-2b6b-422e-8272-8ac173443412");

async function newWebhook() { 
helius.createWebhook({
  accountAddresses: ["2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha"],
  transactionTypes: [TransactionType.TRANSFER],
  webhookURL: "https://typedwebhook.tools/webhook/2cd98f62-f3af-41b9-abb3-831dfcd2ce02",
});
}
newWebhook()