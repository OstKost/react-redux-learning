import axios from '../../axios/axios-quiz'
import { ADD_QUIZ_QUESTION, RESET_CREATE_QUIZ } from './actionTypes'

export function createQuiz() {
	return async (dispatch, getState) => {
		await axios.post('/quizes.json', getState().createQuiz.quiz)
		dispatch(resetCreacteQuiz())
	}
}

export function resetCreacteQuiz() {
	return {
		type: RESET_CREATE_QUIZ
	}
}

export function addQuestion(item) {
	return {
		type: ADD_QUIZ_QUESTION,
		item
	}
}
