import {SET_SELECT_ARTICLES} from '../constants'

export default (selected = [], action) => {
	const {type} = action

	switch (type) {
		case (SET_SELECT_ARTICLES): return action.payload.selected
	}

	return selected
}