export const regionalPokedexData = (region, nationalPokedexData) => {
  return region === 1
    ? nationalPokedexData.slice(0, 151)
    : region === 2
    ? nationalPokedexData.slice(151, 251)
    : region === 3
    ? nationalPokedexData.slice(251, 386)
    : region === 4
    ? nationalPokedexData.slice(386, 493)
    : region === 5
    ? nationalPokedexData.slice(493, 649)
    : region === 6
    ? nationalPokedexData.slice(649, 721)
    : region === 7
    ? nationalPokedexData.slice(721, 809)
    : region === 8
    ? nationalPokedexData.slice(809, 898)
    : region === 9
    ? nationalPokedexData.slice(898, 905)
    : region === 10
    ? nationalPokedexData.slice(905, 1010)
    : nationalPokedexData.slice(0, 1010);
};
