import { emails } from "./emails.js"

const participants = [...new Set(emails)];

const winners = {
	coaching: [],
	oneToOne: []
}

function getRandomWinner(existingWinners, participants) {
	let winner

	do {
		winner = participants[Math.floor(Math.random() * participants.length)]
	} while (existingWinners.includes(winner))

	return winner
}

// Select 5 winners for coaching
for (let i = 0; i < 5; i++) {
	const winner = getRandomWinner([...winners.coaching, ...winners.oneToOne], participants)
	winners.coaching.push(winner)
}

// Select 1 winner for one-to-one
const oneToOneWinner = getRandomWinner(winners.coaching, participants)

winners.oneToOne.push(oneToOneWinner)

console.log("🚀 ~ winnersCoaching:", winners.coaching)
console.log("🚀 ~ winnersOneToOne:", winners.oneToOne)