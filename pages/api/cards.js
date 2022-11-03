// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCardQuery } from "../../utils/queries";

export default function handler(req, res) {
  const input = {
    slug: process.env.SORARE_SLUG,
    cursor: null,
    rarities: "limited",
  };

  fetch(process.env.SORARE_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      APIKEY: process.env.API_KEY,
    },
    body: JSON.stringify({
      query: getCardQuery,
      variables: input,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
}
