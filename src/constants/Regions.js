export const regions = (index) => {
  return index < 151
    ? "kanto"
    : index <= 250
    ? "johto"
    : index <= 385
    ? "hoenn"
    : index <= 492
    ? "sinnoh"
    : index <= 648
    ? "unova"
    : index <= 720
    ? "kalos"
    : index <= 808
    ? "alola"
    : index <= 897
    ? "galar"
    : index <= 904
    ? "hisui"
    : index <= 1009
    ? "paldea"
    : "national";
};
