# Atrasis.js ![npm](https://img.shields.io/npm/v/atrasis.js)
Atrasis.js is a library to interact with the Atrasis API made in TypeScript

# Changelog
```
v1.0.0 -> The package
v1.0.1 -> Adding repository and homepage
```

## Setup
```npm
npm install atrasis.js --save
```
**Note: Node v14 or later is required**

## Examples
## Player Info
```js
const { Client } = require('atrasis.js')
const client = new Client('Original') // can be Ultimate too

async function playerInfo() { // the methods must be called in an async function
	const player = await client.getPlayer('#2PP') // we get the player info
	
	const playerClan = await player.clan.fetch() // this will give the info of the player's clan
	/* or */
	const playerClan = await player.fetchClan()

	/* You can request more info, THIS IS AN EXAMPLE */	

	/* You can check the methods from the player info scrolling down */
}

playerInfo() // we call the function
```

### Methods
- **.clan.fetch()** -> Gives the info of the player's clan (if he have one)
- **.fetchClan()** -> The same of **_.clan.fetch()_**
- **.clan.fetchWar()** -> Gives info about the player's clan war (If the player have clan and the clan have a public war log)
- **.fetchClanWar()** -> The same of **_.clan.fetchWar()_**

## Clan Info
```js
const { Client } = require('atrasis.js')
const client = new Client('Original') // can be Ultimate too

async function clanInfo() { // the methods must be called in an async function
	const clan = await client.getClan('#2PP') // we get the clan info
	
	const ClanLevel = clan.clanLevel // returns the level of the clan
	const ClanMembers = clan.members // returns the number of members

	/* You can request more info, THIS IS AN EXAMPLE */	

	/* You can check the methods from the clan info scrolling down */
}

clanInfo() // we call the function
```

### Methods
- **.fetchWar()** -> Gives the info about the clan war (if the war log isn't private)

## Clan War
```js
const { Client } = require('atrasis.js')
const client = new Client('Original') // can be Ultimate too

async function clanWarInfo() { // the methods must be called in an async function
	const clanWar = await client.getClanWar('#2PP') // we get the clan war info
	
	const ClanAttacks = clanWar.clan.attacks // returns the number attacks of the clan
	const OpponentAttacks = clanWar.opponent.attacks // returns the number attacks of the opponent

	/* You can request more info, THIS IS AN EXAMPLE */
	
	/* You can check the methods from the clan war info scrolling down */
}

clanWarInfo() // we call the function
```

### Methods
- **.status()** -> Returns the status of the war (In War, Preparation Day or War Ended)
- **.startsAt()** -> Returns the date and hour of when the war will start if the war is in preparation day
- **.endsAt()** -> Returns the date and hour of when the war will end if the war is in progress

### Creator and Manteiner
- [Jelosus1](https://github.com/Jelosus2/)

### Disclaimer
> This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see [Supercell's Fan Content Policy](https://supercell.com/en/fan-content-policy/).

## LICENSE

MIT License

Copyright (c) 2021 Jelosus1

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
