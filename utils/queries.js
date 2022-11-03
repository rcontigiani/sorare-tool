const getCardQuery = `
query AllCardsFromUser($slug: String!, $cursor: String, $rarities: [Rarity!]) {
    user(slug: $slug) {
      paginatedCards(after: $cursor, rarities: $rarities) {
        nodes {
         slug,
          name,
          pictureUrl,
          publicMinPrice,
          privateMinPrice,
          season { 
              name
              startYear
          },
          u23Eligible,
        }
        pageInfo {
          endCursor
        }
      }
    }
  }
`;

export { getCardQuery };
