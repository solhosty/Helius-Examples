const BASE_URL = 'https://api.helius.xyz';
const API_KEY = '8bb81828-2b6b-422e-8272-8ac173443412';
const COLLECTION_ADDRESS = '6XxjKYFbcndh2gDcsUrmZgVEsoDxXMnfsaGY6fpTJzNr'; // DeGods

const createCollectionWebhook = async () => {
  try {
    const mints = await getMints();
    const webhookId = await createWebhook(mints);
    console.log(`Created webhook ${webhookId}!`);
  } catch (ex) {
    console.error('Error occurred: ', ex);
  }
};

const getMints = async () => {
  const url = `${BASE_URL}/v1/mintlist?api-key=${API_KEY}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {
        verifiedCollectionAddresses: [COLLECTION_ADDRESS],
      },
      options: {
        limit: 10000,
      },
    }),
  });

  const { result } = await response.json();
  return result.map((x) => x.mint);
};

const createWebhook = async (mints) => {
  const url = `${BASE_URL}/v0/webhooks?api-key=${API_KEY}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      webhookURL: 'https://server.example.xyz',
      transactionTypes: ['NFT_SALE'],
      accountAddresses: mints,
      webhookType: 'enhanced',
    }),
  });

  const { webhookID } = await response.json();
  return webhookID;
};

createCollectionWebhook();
