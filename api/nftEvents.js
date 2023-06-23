const url = `https://api.helius.xyz/v1/nft-events?api-key=db89bbee-9da7-4844-8aa6-8840d7aa8c27`;

const getNftEvents = async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: {
          accounts: ["GhDQkscnh72wCW4tGFHnNpBwSUgiLbHaqZW8wJrrXeVV"],
        }
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("events: ", data.result[0]);
  } catch (error) {
    console.error(error);
  }
};

getNftEvents();
