import {Box, Flex, Text, Tooltip, Image, Spacer, SimpleGrid, Divider} from '@chakra-ui/react'
import {mageIcon, fighterIcon, marksmanIcon, assassinIcon, tankIcon, supportIcon} from '../assets/icons/ChampionCardClassIcons'
import { Champion } from '../types/Champion'

function ChampionCard({id, name, tags, title, info} : Champion){
    let icon_array : JSX.Element[] = []

    tags.forEach((tag : string)=>{
        switch(tag){
            case "Mage":
                icon_array.push(mageIcon)
            break;

            case "Marksman":
                icon_array.push(marksmanIcon)
            break;

            case "Fighter":
                icon_array.push(fighterIcon)
            break;

            case "Assassin":
                icon_array.push(assassinIcon)
            break;

            case "Tank":
                icon_array.push(tankIcon)
            break;

            case "Support":
                icon_array.push(supportIcon)
            break;
        }
    })

    let new_title : string = title.at(0)?.toUpperCase() + title.slice(1)

    return(
        <Box bgGradient='linear(to-b, #005A82, #0AC8B9)' p="3" borderWidth="4px" borderColor="#A09B8C" className="championCard">
            <Flex>
                <Text fontSize={{mobile: 'lg', tablet: 'xl'}} as='b' color="black">{name}</Text>
                <Spacer />
                {
                    icon_array.map((icon : any , index : number)=>(
                        <div key={index}>
                            {icon}
                        </div>
                    ))
                }
            </Flex>
            <Image src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`} mt="3" borderWidth="1px" borderColor="black" borderRadius="lg" shadow="2xl" alt="Champion Card Image"/>
            <Box bgGradient="linear(to-br, #C89B3C, #C8AA6E)" mt="3" p="1" textAlign="center" shadow="dark-lg" borderColor="black" borderWidth="1px" fontSize={{mobile: "sm", tablet: "md"}}>
                <Text as="i">{new_title}</Text>
                <Divider />
                <SimpleGrid columns={4} gap={2} alignItems="center" justifyItems="center" mt="6px">
                    <Box>
                        <Tooltip label="Damage">
                            <Image width="20px" src="https://static.wikia.nocookie.net/leagueoflegends/images/0/07/Damage_rating.png/" alt="Damage Icon"/>
                        </Tooltip>
                        <p id="info-attack">{info.attack}</p>
                    </Box>
                    <Box>
                        <Tooltip label="Defense">
                            <Image width="20px" src="https://static.wikia.nocookie.net/leagueoflegends/images/8/82/Toughness_rating.png" alt="Defense Icon"/>
                        </Tooltip>
                        <p id="info-defense">{info.defense}</p>
                    </Box>
                    <Box>
                        <Tooltip label="Magic">
                            <Image width="20px" src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8e/Champion_style_abilities_active.png" alt="Magic Icon"/>
                        </Tooltip>
                        <p id="info-magic">{info.magic}</p>
                    </Box>
                    <Box>
                        <Tooltip label="Difficulty">
                            <Image width="20px" src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e6/Control_rating.png" alt="Difficulty Icon"/>
                        </Tooltip>
                        <p id="info-difficulty">{info.difficulty}</p>
                    </Box>
                </SimpleGrid>
                
            </Box>
        </Box>
    )
}
export default ChampionCard
