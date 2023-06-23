const url = `https://api.helius.xyz/v0/transactions/?api-key=8bb81828-2b6b-422e-8272-8ac173443412`;

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
