# PokeAPI-GatsbyJS

When the world of Pokemon first came out, there were 151 Pokemon. That total now has grown to 1,010 Pokemon not including some regional variants, shiny "special" variants, Mega Pokemon, etc. This project is a Pokemon web database using Gatsby and [PokeAPI](https://www.gatsbyjs.com/plugins/gatsby-source-pokeapi/) featuring:

1. PokeAPI, GraphQL, gatsby-node.js, and 2 template components are used to create:
   1. 11 Pokedex pages (1 National Pokedex and 10 regional Pokedex).
   2. 1,010 individual Pokemon pages.
2. React Bootstrap is used for responsive website design and reuseable components.
3. gatsby-plugin-remote-images is used to create Gatsby file nodes from PokeAPI images to optimize Gatsby image plugin.
4. Every page will display a Navbar at the top of the page with:
   1. a navbar brand link to go back to home.
      1. The navbar brand link includes a Pokeball icon that will blink at any page start
   2. a nav link to go to the National Pokedex page.
   3. a dropdown with 10 nav links to view a selected region's Pokedex page.
      1. This dropdown becomes scrollable when the hamburger icon is displayed when the screen shrinks in size.
5. The Home Page will show 9 Carousels showing 9 regions and their 3 respective starter Pokemon.
   1. > **_NOTE:_** There are 10 regions, but Hisui has starter Pokemon that were part of other regions and thus have decided to not be shown here.
   2. Controlling the carousels:
      1. On a PC, the user can only click the arrows or the navigation icons
      2. On mobile devices, the user can click the controls or use the swipe functionality
6. On hover, all Pokemon images will scale up and glow (the glow color depends on the Pokemon's first typing)
   1. This feature is fully functional for PCs
   2. For mobile devices,
      1. the Pokemon image can scale up on press & hold without a glow in the Main page and Pokedex pages
      2. the Pokemon image can scale up and glow on press & hold in any individual Pokemon page.
7. The Pokedex Pages:
   1. All regional Pokedex pages will display only their respective Pokemon in a grid.
   2. The National Pokedex page will display all 1,010 Pokemon in a grid
   3. The grid is responsive starting with 4 cards per row down to 1 card at screen's lowest size.
   4. All Pokemon images may take a second to fully load with a blurred image while waiting to load.
8. Individual Pokemon Pages use a responsive 2 column row to display:
   1. The Pokemon name, image, and typing.
      1. The image will still glow on hover but the mouse icon is no longer a pointer
   2. A [chart-css](https://www.gatsbyjs.com/plugins/gatsby-plugin-charts-css/) bar chart displaying the Pokemon's base stats
      1. Due to some stats going over 100 points, the total percentage will dynamically be based on the selected Pokemon's highest stat
      2. A hovered stat will be highlighted:
         1. when hovering over a stat on a computer.
         2. when clicking on a stat on a mobile device

> **_NOTE:_** This project does not include regional variants, shiny "special" variants, Mega Pokemon, etc.

## How to use the Project

This project is being hosted and deployed through Gatsby Cloud [PokeAPI-GatsbyJS](https://pokeapigatsbyjs.gatsbyjs.io/)
