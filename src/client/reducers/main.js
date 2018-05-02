import constants from '../constants/index'

const initialState = {
	sidebar: {
		opened: true,
	}
}

const mainReducer = function (state = initialState, action) {  
	switch(action.type) {
		case constants.TOGGLE_SIDEBAR:
			return { 
				...state,
				sidebar: {
					opened: !state.sidebar.opened
				}
			}
		case constants.HIDE_SIDEBAR:
			return { 
				...state,
				sidebar: {
					opened: false
				}
			}
		default:
			return state
	}
}

export default mainReducer