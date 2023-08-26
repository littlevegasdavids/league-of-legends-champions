import { NextPage } from "next";
import { getAllChampionPagePaths } from "../../lib/champion";
import { Box } from "@chakra-ui/react";

export async function getStaticPaths() {
  const paths = await getAllChampionPagePaths();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  console.log(id);

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion/${id}.json`
  );

  const champion = await response.json();

  return {
    props: { champion },
  };
};

const ChampionPage: NextPage = ({champion}) => {
    console.log(champion);
  return (
    <Box bg="white">
    </Box>
  )
};

export default ChampionPage;
