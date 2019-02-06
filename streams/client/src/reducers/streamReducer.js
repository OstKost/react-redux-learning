import {
	FETCH_STREAM,
	FETCH_STREAMS,
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM
} from '../actions/types'

export default (state = {}, action = {}) => {
	switch (action.type) {
		case FETCH_STREAMS:
			return {
				...state,
				...action.payload.reduce((acc, el) => {
					acc[el.id] = el
					return acc
				}, {})
			}
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload }
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload }
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload }
		case DELETE_STREAM:
			return Object.keys(state).reduce((object, key) => {
				if (key !== action.payload) {
					object[key] = state[key]
				}
				return object
			}, {})
		// lodash
		// return _.omit(state, action.payload)
		default:
			return state
	}
}
