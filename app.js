import { emails } from "./emails.js"

const participants = emails

let winnersCoaching = []
let winnersOneToOne = []

function random(array, min = 0, max = array.length) {
	return array[Math.floor(Math.random() * (max - min)) + min]
}

function getWinnerCoaching(winnersCoachingArray, participantsArray) {
	let winner = random(participantsArray)

	const winnerExist = winnersCoachingArray.includes(winner)

	if (winnerExist) {
		return getWinnerCoaching(participantsArray)
	}

	winnersCoaching.push(winner)

	return winner
}

function getWinnerOneToOne(winnersCoachingArray, participantsArray) {
	let winner = random(participantsArray)

	const winnerExist = winnersCoachingArray.includes(winner)

	if (winnerExist) {
		return getWinnerOneToOne(participantsArray)
	}

	winnersOneToOne.push(winner)

	return winner
}

for (let i = 0; i < 5; i++) {
	getWinnerCoaching(winnersCoaching, participants)
}

console.log("🚀 ~ winnersCoaching:", winnersCoaching)

getWinnerOneToOne(winnersCoaching, participants)

console.log("🚀 ~ winnersOneToOne:", winnersOneToOne)
