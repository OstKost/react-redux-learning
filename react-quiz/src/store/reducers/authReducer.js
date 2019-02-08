import { AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/actionTypes'

const initialState = {
	token: null
}

export default function authReducer(state = initialState, action) {
	if (action.type === AUTH_SUCCESS) {
		return {
			...state,
			token: action.token
		}
	}

	if (action.type === AUTH_LOGOUT) {
		return {
			...state,
			token: null
		}
	}

	return state
}
