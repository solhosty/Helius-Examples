const url = `https://api.helius.xyz/v1/nft-events?api-key=<api_key>`;

const getNftEvents = async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {
          accounts: ["BAAzgRGWY2v5AJBNZNFd2abiRXAUo56UxywKEjoCZW2"],
        }
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("events: ", data.result);
  } catch (error) {
    console.error(error);
  }
};

getNftEvents();
