const url = `https://api.helius.xyz/v1/active-listings?api-key=8bb81828-2b6b-422e-8272-8ac173443412`;

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
