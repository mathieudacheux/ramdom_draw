import { emails } from "./emails.js"

const emailParticipants = [...new Set(emails)]

const selectRandomWinner = (participants, existingWinners) => {
	const eligibleParticipants = participants.filter(
		(participant) => !existingWinners.includes(participant)
	)
	return eligibleParticipants[
		Math.floor(Math.random() * eligibleParticipants.length)
	]
}

const selectWinners = (participants, coachingCount) => {
	const winners = {
		coaching: [],
		oneToOne: []
	}

	const coachingWinners = Array.from({ length: coachingCount }, () => {
		return selectRandomWinner(participants, winners.coaching)
	})

	winners.coaching = coachingWinners
	winners.oneToOne = [selectRandomWinner(participants, coachingWinners)]

	return winners
}

const results = selectWinners(emailParticipants, 5)

console.log("🚀 ~ winnersCoaching:", results.coaching)
console.log("🚀 ~ winnersOneToOne:", results.oneToOne)
