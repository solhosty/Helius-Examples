const env = require('./env-config.js');
const url = `https://api.helius.xyz/v1/active-listings?api-key=${env.HELIUS_API_KEY}`;

const getActiveListings = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {
        firstVerifiedCreators: ["GVkb5GuwGKydA4xXLT9PNpx63h7bhFNrDLQSxi6j5NuF"],
      },
    }),
  });

  const { result } = await response.json();
  console.log("Active listings: ", result);
};

getActiveListings();
