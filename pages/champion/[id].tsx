import { NextPage } from "next";
import { getAllChampionPagePaths } from "../../lib/util/championPagePaths";
import {
  Box,
  Center,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Popover,
  PopoverTrigger,
  Flex,
  GridItem,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  supportIcon,
  fighterIcon,
  mageIcon,
  marksmanIcon,
  assassinIcon,
  tankIcon,
} from "../../assets/icons/ChampionCardClassIcons";
import Head from "next/head";
import { Champion } from "../../lib/types";

interface Params {
  params: {
    id: string;
  };
}

interface ChampionPageProps {
  champion: Champion;
}

export async function getStaticPaths() {
  const paths = await getAllChampionPagePaths();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: Params) => {
  const id = params.id;

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion/${id}.json`
  );

  const data = await response.json();

  const champion = {
    id: data.data[id].id,
    name: data.data[id].name,
    lore: data.data[id].lore,
    allytips: data.data[id].allytips,
    enemytips: data.data[id].enemytips,
    tags: data.data[id].tags,
    info: data.data[id].info,
    spells: data.data[id].spells,
    passive: data.data[id].passive,
  };

  return {
    props: { champion },
  };
};

const ChampionPage: NextPage<ChampionPageProps> = ({ champion }) => {
  let icon_array: JSX.Element[] = [];

  champion.tags.forEach((tag: string) => {
    switch (tag) {
      case "Support":
        icon_array.push(supportIcon);
        break;

      case "Fighter":
        icon_array.push(fighterIcon);
        break;

      case "Mage":
        icon_array.push(mageIcon);
        break;

      case "Marksman":
        icon_array.push(marksmanIcon);
        break;

      case "Assassin":
        icon_array.push(assassinIcon);
        break;

      case "Tank":
        icon_array.push(tankIcon);
        break;
    }
  });
  return (
    <Box>
      <Head>
        <title>{champion.name}</title>
      </Head>
      <Box
        className="champion"
        borderWidth="4px"
        rounded="lg"
        padding={{ mobile: 3, monitor: 6 }}
      >
        <Stack gap={6}>
          <Center>
            <Text
              fontWeight="bold"
              as="u"
              fontSize={{ mobile: "6xl", monitor: "7xl" }}
            >
              {champion.name}
            </Text>
          </Center>
          <SimpleGrid columns={{ mobile: 1, monitor: 2 }} justifyItems="center">
            <Box
              borderWidth="3px"
              borderColor="black"
              rounded="lg"
              shadow={{ mobile: "2xl", monitor: "dark-lg" }}
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                alt={`${champion.id} splash image`}
              />
            </Box>
            <GridItem alignSelf="center">
              <Box
                bgGradient="linear(to-t, #C8AA6E, #F0E6D2)"
                mt="3"
                p={5}
                shadow={{ mobile: "2xl", monitor: "dark-lg" }}
                borderColor="black"
                borderWidth="3px"
                textAlign="center"
              >
                <Stack spacing={5} direction={"column"}>
                  <Flex justifyContent="center" gap={6}>
                    {icon_array.map((icon: any, index: number) => {
                      return <div key={index}>{icon}</div>;
                    })}
                  </Flex>

                  <SimpleGrid columns={{ mobile: 2, tablet: 4 }}>
                    <GridItem>
                      <Center>
                        <Image
                          width="25px"
                          src="https://static.wikia.nocookie.net/leagueoflegends/images/0/07/Damage_rating.png/"
                          alt="Damage Icon"
                        />
                      </Center>

                      <Text as="b">Damage - {champion.info.attack}</Text>
                    </GridItem>

                    <GridItem>
                      <Center>
                        <Image
                          width="25px"
                          src="https://static.wikia.nocookie.net/leagueoflegends/images/8/82/Toughness_rating.png"
                          alt="Defense Icon"
                        />
                      </Center>
                      <Text as="b">Defense - {champion.info.defense}</Text>
                    </GridItem>

                    <GridItem paddingTop={{ mobile: 3, tablet: 0 }}>
                      <Center>
                        <Image
                          width="25px"
                          src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8e/Champion_style_abilities_active.png"
                          alt="Magic Icon"
                        />
                      </Center>
                      <Text as="b">Magic - {champion.info.magic}</Text>
                    </GridItem>

                    <GridItem paddingTop={{ mobile: 3, tablet: 0 }}>
                      <Center>
                        <Image
                          width="25px"
                          src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e6/Control_rating.png"
                          alt="Difficulty Icon"
                        />
                      </Center>
                      <Text as="b">
                        Difficulty - {champion.info.difficulty}
                      </Text>
                    </GridItem>
                  </SimpleGrid>

                  <Text
                    fontWeight="bold"
                    fontSize={{ mobile: "lg", tablet: "2xl" }}
                  >
                    Spells
                  </Text>
                  <Flex justifyContent="center" gap="6">
                    <Popover trigger="hover">
                      <PopoverTrigger>
                        <Box
                          borderWidth="2px"
                          borderColor="black"
                          shadow="dark-lg"
                        >
                          <Image
                            alt={`${champion.passive.image.full} - image`}
                            src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/passive/${champion.passive.image.full}`}
                            style={{ cursor: "pointer" }}
                          />
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent
                        bg="#F0E6D2"
                        borderColor="black"
                        borderWidth="2px"
                      >
                        <PopoverArrow />
                        <PopoverHeader
                          fontWeight="bold"
                          borderBottomColor="black"
                        >
                          {champion.passive.name}
                        </PopoverHeader>
                        <PopoverBody>
                          {champion.passive.description}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>

                    {champion.spells.map((spell: any, index: number) => {
                      return (
                        <Popover trigger="hover" key={spell}>
                          <PopoverTrigger>
                            <Box
                              borderWidth="2px"
                              borderColor="black"
                              shadow="dark-lg"
                            >
                              <Image
                                key={index}
                                src={`https://ddragon.leagueoflegends.com/cdn/13.8.1/img/spell/${spell.id}.png`}
                                alt={`${spell.id} - image`}
                                style={{ cursor: "pointer" }}
                              />
                            </Box>
                          </PopoverTrigger>
                          <PopoverContent
                            bg="#F0E6D2"
                            borderColor="black"
                            borderWidth="2px"
                          >
                            <PopoverArrow />
                            <PopoverHeader
                              fontWeight="bold"
                              borderBottomColor="black"
                            >
                              {spell.name}
                            </PopoverHeader>
                            <PopoverBody>{spell.description}</PopoverBody>
                          </PopoverContent>
                        </Popover>
                      );
                    })}
                  </Flex>
                </Stack>
              </Box>
            </GridItem>
          </SimpleGrid>
          <SimpleGrid columns={{ mobile: 1, monitor: 2 }} spacing={6}>
            <TableContainer
              borderWidth="4px"
              borderColor="black"
              bg="#F0E6D2"
              shadow={{ mobile: "2xl", monitor: "dark-lg" }}
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Td
                      textAlign="center"
                      fontWeight="bold"
                      fontSize="xl"
                      borderBottomColor="black"
                      borderWidth="3px"
                    >
                      Ally Tips
                    </Td>
                  </Tr>
                </Thead>
                <Tbody>
                  {champion.allytips.map((tip: string, index: number) => {
                    return (
                      <Tr key={index}>
                        <Td
                          whiteSpace="normal"
                          overflow="auto"
                          borderBottomColor="black"
                        >
                          {tip}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>

            <TableContainer
              borderWidth="4px"
              borderColor="black"
              bg="#F0E6D2"
              shadow={{ mobile: "2xl", monitor: "dark-lg" }}
            >
              <Table variant="simple" mb={10}>
                <Thead>
                  <Tr>
                    <Td
                      textAlign="center"
                      fontWeight="bold"
                      fontSize="xl"
                      borderBottomColor="black"
                      borderWidth="3px"
                    >
                      Enemy Tips
                    </Td>
                  </Tr>
                </Thead>
                <Tbody>
                  {champion.enemytips.map((tip: string, index: number) => {
                    return (
                      <Tr key={index}>
                        <Td
                          whiteSpace="normal"
                          overflow="auto"
                          borderColor="black"
                        >
                          {tip}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </SimpleGrid>

          <Text
            align="center"
            fontSize="xl"
            fontStyle="italic"
            textColor="white"
          >
            {champion.lore}
          </Text>

          <Button
            alignSelf="center"
            onClick={() => (window.location.href = "/")}
            shadow="xl"
          >
            <ArrowBackIcon pr={1} />
            Back to champions page
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ChampionPage;
