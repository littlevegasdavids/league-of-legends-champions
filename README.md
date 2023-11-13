# 🎮 League Of Legends Champions 🎮
A simple single page application where a user can look at a list of different League Of Legends Champions and see all the relevant information, stats and lore about each Champion.

## ▶️ How to Run ▶️
1) Ensure that you have [NodeJS](https://nodejs.org/en/) installed on your computer. 
2) Clone the repo.
3) Install depencies
   ```bash
   npm install
   ```
4) Run the project
   ```bash
   npm start
   ```

## 📚 What I learnt 📚
This project not only taught me the ins and outs of React but also allowed me to wield the language of colors, UI, and UX to craft visually appealing displays. 

The inspiration for the design approach that I wanted was based off the trading card game Yu-Gi-Oh!. I wanted to display each champion in a playing card format with the name, picture and stats of the champion.

I stricly used the colour pallet that [Riot Games Website provides](https://brand.riotgames.com/en-us/league-of-legends/color/) to ensure that the theme, branding and colour pallet is consistent within the project.

## 🔧 Technologies 🔧

**Frontend**: React, ChakraUI

**Backend**: Wrapped a TypeScript (See: [libs/champions.ts](https://github.com/littlevegasdavids/league-of-legends-champions/blob/main/lib/champion.ts)) function around the [ddraongs API](https://developer.riotgames.com/docs/lol#data-dragon_champions) provided by Riot Games. This allowed me to call the API to get all relevenat champion data as well as ensuring that any new champions added to the game will reflect on the app as well.

## 🖥️ Screenshots 🖥️ 

<img src="/images/dark-magician-card.jpeg" width="400"/>
<img src="/images/HomePage.png" />
<img src="/images/ChampionPage.png" />

