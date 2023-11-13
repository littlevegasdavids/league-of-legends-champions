export async function getAllChampionPagePaths() {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion.json"
  );

  const data = await response.json();

  const ids: string[] = [];

  Object.values(data.data).forEach((champion: any) => {
    ids.push(`/champion/${champion.id}`);
  });

  return ids;
}

export const getAllChampionData = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion.json"
  );
  const data = await response.json();

  return data;
};

export const getChampionData = async(id: string) => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion/${id}.json`
  );

  const data = await response.json();

  return data
}

