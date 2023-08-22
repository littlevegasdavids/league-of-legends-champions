import { useQuery, gql } from '@apollo/client';
import ChampionCard from './ChampionCard';
import {Center, Text, Select, SimpleGrid, Stack, Input, HStack, Button, Tooltip, Box, useMediaQuery} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

type Info = {
    attack: number, 
    defense: number, 
    magic: number, 
    difficulty: number
}

type Champion = {
    id : string, 
    name: string
    tags: [string], 
    title: string, 
    info: Info
}


const CHAMPIONS_QUERY = gql`
  query GetChampions {
    champions {
      id 
      name
      tags
      title
      info{
        attack
        defense
        magic
        difficulty
      }
    }
  }
`;

export default function Champions(){
    const [champions, setChampions] = useState([])
    const [selectedClass, setSelectedClass] = useState('All')
    const [selectedDifficulty, setSelectedDifficulty] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const[isLagerThan1024] = useMediaQuery("(min-width: 1024px)")

    const {loading, error, data} = useQuery(CHAMPIONS_QUERY)

    useEffect(() => {
        if (data && data.champions) {
            setChampions(data.champions);
        }
      }, [data]);

    if(loading){
        return(
            <Loading />
        )
    }

    if(error){
        console.log(error.message)
        return(
            <Center>
                <Text color='red' as='b' fontSize="2xl">Error encountered getting data of Champions</Text>
            </Center>
        )
    }

    const filteredChampions = champions.filter((champion : Champion)=>{
        //Difficulty filter
        if(selectedDifficulty === "Easy"){
            if(champion.info.difficulty > 3)
                return false
        }
        else if(selectedDifficulty === "Medium"){
            if(champion.info.difficulty < 4 || champion.info.difficulty > 6)
                return false
        }
        else if(selectedDifficulty === "Hard"){
            if(champion.info.difficulty <= 6)
                return false
        }

        if(selectedClass !== "All"){
            if(selectedClass === "Support" && !champion.tags.includes("Support")){
                return false
            }

            if(selectedClass === "Fighter" && !champion.tags.includes("Fighter")){
                return false
            }
            if(selectedClass === "Mage" && !champion.tags.includes("Mage")){
                return false
            }
            else if(selectedClass === "Marksman" && !champion.tags.includes("Marksman")){
                return false
            }
            else if(selectedClass === "Slayer" && !champion.tags.includes("Assassin")){
                return false
            }
            else if(selectedClass === "Tank" && !champion.tags.includes("Tank") ){
                return false
            }
        }

        if (searchQuery && !champion.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }

        return true
    })

    return(
        <Stack gap={5}>
            <Text color="#C89B3C" fontStyle="bold" fontWeight="bold" as="u" fontSize="6xl" textAlign="center">Champions</Text>

            <SimpleGrid columns={{mobile: 1, monitor: 3}} gap={{mobile: 5, monitor: 10}}>

                {
                    //Conditional rendering because select item does not work correctly when using placeSelf={{phone: "center", monitor: "left"}}
                }
                {isLagerThan1024 ? (
                    <Select placeholder='Difficulty' bgColor="#C8AA6E" borderColor="#A09B8C" maxWidth={{mobile: "50%", tablet: "30%", monitor: "max-content"}}value={selectedDifficulty} onChange={e => setSelectedDifficulty(e.target.value)} placeSelf={{phone: "center", monitor: "left"}}>
                        <option value='All'>All</option>
                        <option value='Easy'>Easy (1-3)</option>
                        <option value='Medium'>Medium (4-6)</option>
                        <option value='Hard'>Hard (7-10)</option>
                    </Select>
                ):(
                    <Select placeholder='Difficulty' bgColor="#C8AA6E" borderColor="#A09B8C" maxWidth={{mobile: "50%", tablet: "30%", monitor: "max-content"}}value={selectedDifficulty} onChange={e => setSelectedDifficulty(e.target.value)} placeSelf="center">
                        <option value='All'>All</option>
                        <option value='Easy'>Easy (1-3)</option>
                        <option value='Medium'>Medium (4-6)</option>
                        <option value='Hard'>Hard (7-10)</option>
                    </Select>
                )}

                <Box ml={5} placeSelf="center">
                    <HStack>
                        <Tooltip label="All">
                                <Button size="sm" onClick={() => setSelectedClass("All")} style={{backgroundColor: selectedClass === "All" ? "#0397AB" : ''}}>
                                    <img src="https://static.wikia.nocookie.net/leagueoflegends/images/6/67/Specialist_icon.png" width="30px" alt="All Icon"/>
                                </Button>
                        </Tooltip>

                        <Tooltip label="Fighter">
                                <Button size="sm" onClick={() => setSelectedClass("Fighter")} style={{backgroundColor: selectedClass === "Fighter" ? "#0397AB" : ''}}>
                                    <img src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png" width="30px" alt="Fighter Icon"/>
                                </Button>
                        </Tooltip>

                        <Tooltip label="Mage">
                            <Button size="sm" onClick={()=>setSelectedClass('Mage')} style={{backgroundColor: selectedClass === "Mage" ? "#0397AB" : ''}}>
                                <img src="https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Mage_icon.png" width="30px" alt="Mage Icon"/>
                            </Button>
                        </Tooltip>

                        <Tooltip label="Marksman">
                            <Button size="sm" onClick={()=>setSelectedClass('Marksman')} style={{backgroundColor: selectedClass === "Marksman" ? "#0397AB" : ''}}>
                                <img src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png" width="30px" alt="Marksman Icon"/>
                            </Button>
                        </Tooltip>

                        <Tooltip label="Slayer">
                            <Button size="sm" onClick={()=>setSelectedClass('Slayer')} style={{backgroundColor: selectedClass === "Slayer" ? "#0397AB" : ''}}>
                                <img src="https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png" width="30px" alt="Slayer Icon"/>
                            </Button>
                        </Tooltip>

                        <Tooltip label="Support">
                            <Button size="sm" onClick={()=>setSelectedClass('Support')} style={{backgroundColor: selectedClass === "Support" ? "#0397AB" : ''}}>
                                <img src="https://static.wikia.nocookie.net/leagueoflegends/images/5/58/Controller_icon.png" width="30px" alt="Support Icon"/>
                            </Button>
                        </Tooltip>

                        <Tooltip label="Tank">
                            <Button size="sm" onClick={()=>setSelectedClass('Tank')} style={{backgroundColor: selectedClass === "Tank" ? "#0397AB" : ''}}>
                                <img src="https://static.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png" width="30px" alt="Tank Icon"/>
                            </Button>
                        </Tooltip>
                        
                    </HStack>
                </Box>
                
                <Box textAlign={{mobile: "center", monitor: "right"}}>
                    <Input placeholder="Search" bgColor="#C8AA6E" borderColor="#A09B8C" maxWidth={{mobile: "75%", tablet:"65%", monitor: "max-content"}} onChange={e => setSearchQuery(e.target.value)}/>
                </Box>

            </SimpleGrid>

            <SimpleGrid columns={{mobile: 2, tablet: 3, monitor: 5}} gap={6}>
                {filteredChampions.map((champion: Champion)=>(
                    <Link to={`/champion/${champion.id}`} key={champion.id}>
                        <ChampionCard key={champion.id} id={champion.id} name={champion.name} tags={champion.tags} title={champion.title} info={champion.info}/>
                    </Link>
                ))}
            </SimpleGrid>
        </Stack>
        
    )
}