import { ADD_QUIZ_QUESTION, CREATE_QUIZ, RESET_CREATE_QUIZ } from '../actions/actionTypes'

const initialState = {
	quiz: []
}

export default function createQuizReducer(state = initialState, action) {
	if (action.type === ADD_QUIZ_QUESTION) {
		return {
			...state,
			quiz: [...state.quiz, action.item]
		}
    }
    
	if (action.type === CREATE_QUIZ) {
		return {
			...state,			
		}
    }
    
	if (action.type === RESET_CREATE_QUIZ) {
		return {
            ...state,			
            quiz: []
		}
	}

	return state
}
