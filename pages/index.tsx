import type { NextPage } from "next";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Champion } from "../types/Champion";
import ChampionCard from "../components/ChampionCard";
import Head from "next/head";

const Home: NextPage = ({ champions }) => {
  return (
    <Box>
      <Head>
        <title>League of Legends Champions</title>
      </Head>
      <SimpleGrid gap={6} columns={5}>
        {champions.map((champion: Champion) => (
          <ChampionCard
            id={champion.id}
            name={champion.id}
            tags={champion.tags}
            title={champion.title}
            info={champion.info}
            key={champion.id}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion.json"
  );

  const data = await response.json();

  let champions: Champion[] = [];

  Object.values(data.data).forEach((champion: any) => {
    champions.push({
      id: champion.id,
      title: champion.title,
      name: champion.name,
      tags: champion.tags,
      info: {
        attack: champion.info.attack,
        defense: champion.info.defense,
        magic: champion.info.magic,
        difficulty: champion.info.difficulty,
      },
    });
  });

  return {
    props: { champions },
  };
};

export default Home;
