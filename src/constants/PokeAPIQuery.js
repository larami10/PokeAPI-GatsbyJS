import { graphql, useStaticQuery } from "gatsby";

export const PokeAPIQuery = () => {
  const query = useStaticQuery(graphql`
    query {
      allPokemon {
        nodes {
          name
          stats {
            attack
            defense
            hp
            special_attack
            special_defense
            speed
          }
          types
          localImage {
            childImageSharp {
              gatsbyImageData(
                webpOptions: { quality: 100 }
                quality: 100
                formats: WEBP
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `);

  return query.allPokemon.nodes;
};
