# PokeAPI-GatsbyJS

When the world of Pokemon first came out, there were 151 Pokemon. That total now has grown to 1,010 Pokemon not including some regional variants, shiny "special" variants, Mega Pokemon, etc. This project is a Pokemon web database using Gatsby and [PokeAPI](https://www.gatsbyjs.com/plugins/gatsby-source-pokeapi/) featuring:

1. PokeAPI, GraphQL, gatsby-node.js, and 2 template components are used to create:
   1. 11 Pokedex pages (1 National Pokedex and 10 regional Pokedex).
   2. 1,010 individual Pokemon pages.
2. React Bootstrap for responsive website design.
3. Reusable components.
4. Every page will display a Navbar at the top of the page with:
   1. a navbar brand link to go back to home.
   2. a nav link to go to the National Pokedex page.
   3. a dropdown with 10 nav links to view a selected region's Pokedex page.
      1. This dropdown becomes scrollable when the hamburger icon is displayed when the screen shrinks in size.
5. The Home Page will show 9 Carousels showing 9 regions and their 3 respective starter Pokemon.
   1. > **_NOTE:_** There are 10 regions, but Hisui has starter Pokemon that were part of other regions and thus have decided to not be shown here.
6. On hover, all Pokemon images will scale up and glow (the glow color depends on the Pokemon's first typing)
7. The Pokedex Pages:
   1. All regional Pokedex pages will display only their respective Pokemon in a grid.
   2. The National Pokedex page will display all 1,010 Pokemon in a grid
   3. The grid is responsive starting with 4 cards per row down to 1 card at screen's lowest size.
8. Individual Pokemon Pages use a responsive 2 column row to display:
   1. The Pokemon name, image, and typing.
      1. The image will still glow on hover but the mouse icon is no longer a pointer
   2. A [chart-css](https://www.gatsbyjs.com/plugins/gatsby-plugin-charts-css/) bar chart displaying the Pokemon's base stats
      1. Due to some stats going over 100 points, the total percentage will dynamically be based on the selected Pokemon's highest stat
      2. When hovering over a stat, the hovered stat will be highlighted

> **_NOTE:_** This project does not include regional variants, shiny "special" variants, Mega Pokemon, etc.

## How to use the Project
