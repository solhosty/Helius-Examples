const env = require('./env-config.js');
const url = `https://api.helius.xyz/v1/nft-events?api-key=${env.HELIUS_API_KEY}`;

const getAllNftEvents = async () => {
  const events = [];
  let paginationToken;

  while (true) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: {
          sources: ["MAGIC_EDEN"],
        },
        options: {
          limit: 100,
          paginationToken: paginationToken,
        },
      }),
    });

    const { result, paginationToken: nextPaginationToken } = await response.json();
    console.log(`Got batch of ${result.length} events!`);
    events.push(...result);

    if (nextPaginationToken) {
      paginationToken = nextPaginationToken;
      console.log(`Proceeding to next page with token ${paginationToken}.`);
    } else {
      console.log('Finished getting all events.');
      break;
    }
  }

  console.log(`Got ${events.length} events in total!`);
  return events;
};

getAllNftEvents();
