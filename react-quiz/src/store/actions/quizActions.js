import axios from '../../axios/axios-quiz'
import {
	FETCH_QUIZES_START,
	FETCH_QUIZES_SUCCESS,
	FETCH_QUIZES_ERROR,
	FETCH_QUIZE_SUCCESS,
	QUIZ_SET_STATE,
	QUIZ_FINISH,
	QUIZ_NEXT_QUESTION,
	QUIZ_RETRY
} from './actionTypes'

export function fetchQuizes() {
	return async dispatch => {
		dispatch(fetchQuizesStart())
		try {
			const response = await axios.get('/quizes.json')

			const quizes = []

			Object.keys(response.data).forEach((key, index) => {
				quizes.push({ id: key, name: `Тест №${index + 1}` })
			})

			dispatch(fetchQuizesSuccess(quizes))
		} catch (error) {
			dispatch(fetchQuizesError(error))
		}
	}
}

export function fetchQuizesStart() {
	return {
		type: FETCH_QUIZES_START
	}
}

export function fetchQuizesSuccess(quizes) {
	return {
		type: FETCH_QUIZES_SUCCESS,
		quizes
	}
}

export function fetchQuizesError(error) {
	return {
		type: FETCH_QUIZES_ERROR,
		error
	}
}

export function fetchQuizById(quizId) {
	return async dispatch => {
		dispatch(fetchQuizesStart())

		try {
			const response = await axios.get(`/quizes/${quizId}.json`)
			const quiz = response.data

			dispatch(fetchQuizSucces(quiz))
		} catch (error) {
			dispatch(fetchQuizesError(error))
		}
	}
}

export function fetchQuizSucces(quiz) {
	return {
		type: FETCH_QUIZE_SUCCESS,
		quiz
	}
}

export function quizSetState(answerState, results) {
	return {
		type: QUIZ_SET_STATE,
		answerState,
		results
	}
}

export function finishQuiz() {
	return {
		type: QUIZ_FINISH
	}
}

export function quizNextQuestion(questionNum) {
	return {
		type: QUIZ_NEXT_QUESTION,
		activeQuestion: questionNum,
		answerState: null
	}
}

export function quizAnswerClick(answerId) {
	function isQuizFinished(state) {
		return state.activeQuestion + 1 === state.quiz.length
	}

	return (dispatch, getState) => {
		const state = getState().quiz

		if (state.answerState) return

		const question = state.quiz[state.activeQuestion]
		const results = state.results

		const finalAnswer =
			question.rightAnswerId === answerId ? 'right' : 'wrong'

		results[question.id] = finalAnswer

		dispatch(quizSetState({ [answerId]: finalAnswer }, results))

		const timeout = window.setTimeout(() => {
			if (isQuizFinished(state)) {
				dispatch(finishQuiz())
			} else {
				dispatch(quizNextQuestion(state.activeQuestion + 1))
			}

			window.clearTimeout(timeout)
		}, 700)
	}
}

export function retryQuiz() {
	return {
		type: QUIZ_RETRY
	}
}