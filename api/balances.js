const url = "https://api.helius.xyz/v0/addresses/<address>/balances?api-key=<your-key>";

const getBalances = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("balances: ", data);
  } catch (error) {
    console.error(error);
  }
};
getBalances();
