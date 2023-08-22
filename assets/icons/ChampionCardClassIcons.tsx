import { Tooltip, Image } from "@chakra-ui/react"

let mageIcon = 
    <Tooltip label="Mage">
        <Image width="30px"src="https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Mage_icon.png" alt="Mage Class Icon"/>
    </Tooltip>

let fighterIcon = 
    <Tooltip label="Fighter">
        <Image width="30px"src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png" alt="Fighter Class Icon"/>
    </Tooltip>

let marksmanIcon = 
    <Tooltip label = "Marksman">
        <Image width="30px"src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png" alt="Marksman Class Icon" />
    </Tooltip>

let assassinIcon = 
    <Tooltip label = "Assassin">
        <Image width="30px"src="https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png" alt="Slayer - Assassin Class Icon"/>
    </Tooltip>

let tankIcon = 
    <Tooltip label = "Tank">
        <Image width="30px"src="https://static.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png" alt="Tank Class Icon"/>
    </Tooltip>

let supportIcon = 
    <Tooltip label = "Support">
        <Image width="30px"src="https://static.wikia.nocookie.net/leagueoflegends/images/5/58/Controller_icon.png" alt="Support Class Icon"/>
    </Tooltip>

export {mageIcon, fighterIcon, marksmanIcon, assassinIcon, tankIcon, supportIcon}