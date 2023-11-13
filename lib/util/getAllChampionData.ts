export const getAllChampionData = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion.json"
  );
  const data = await response.json();

  return data;
};
