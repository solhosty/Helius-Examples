const url = `https://api.helius.xyz/v0/addresses/5Axu9WgHfd32eJQf99ZTfL6p62ZwxH9dAhGMWfMG7LsE/nfts?api-key=8bb81828-2b6b-422e-8272-8ac173443412`;

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
