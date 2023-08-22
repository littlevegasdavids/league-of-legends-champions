import { Stack, Center, Image, Text } from "@chakra-ui/react"

let supportIcon = 
    <Stack spacing={1}>
      <Center>
        <Image width="50px"src="https://static.wikia.nocookie.net/leagueoflegends/images/5/58/Controller_icon.png" alt="Controller Class Icon"/>
        </Center>
        <Center>
          <Text as="b" fontSize={{mobile: "lg", tablet: "2xl"}}>Support</Text>
        </Center>
    </Stack>

let fighterIcon = 
    <Stack spacing={1}>
      <Center>
        <Image width="50px"src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png" alt = "Fighter Class Icon"/>
      </Center>
      <Center>
        <Text as="b" fontSize={{mobile: "lg", tablet: "2xl"}}>Fighter</Text>
      </Center>
    </Stack>

let mageIcon = 
    <Stack spacing={1}>
      <Center>
        <Image width="50px"src="https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Mage_icon.png" alt="Mage Class Icon"/>
      </Center>
      <Center>
        <Text as="b" fontSize={{mobile: "lg", tablet: "2xl"}}>Mage</Text>
      </Center>
    </Stack>

let marksmanIcon = 
    <Stack spacing={1}>
      <Center>
        <Image width="50px"src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png" alt="Marksman Class Icon" />
      </Center>
      <Center>
        <Text as="b" fontSize={{mobile: "lg", tablet: "2xl"}}>Marksman</Text>
      </Center>
    </Stack>

let assassinIcon = 
    <Stack spacing={1}>
      <Center>
        <Image width="50px"src="https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png" alt="Slayer - Assassin Class Icon"/>
      </Center>
      <Center>
        <Text as="b" fontSize={{mobile: "lg", tablet: "2xl"}}>Assassin</Text>
      </Center>
    </Stack>

let tankIcon = 
    <Stack spacing={1}>
      <Center>
        <Image width="50px"src="https://static.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png" alt="Tank Class Icon"/>
      </Center>
      <Center>
        <Text as="b" fontSize={{mobile: "lg", tablet: "2xl"}}>Tank</Text>
      </Center>
    </Stack>

export {supportIcon, fighterIcon, mageIcon, marksmanIcon, assassinIcon, tankIcon}