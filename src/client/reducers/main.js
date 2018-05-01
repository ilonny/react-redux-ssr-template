import constants from '../constants/index'

const initialState = {
	sidebar: {
		opened: false,
	}
}

const mainReducer = function (state = initialState, action) {  
	console.log('action', action)
	switch(action.type) {
		case constants.TOGGLE_SIDEBAR:
			console.log('TOGGLE_SIDEBAR dispatched')				
			return { 
				...state,
				sidebar: {
					opened: !state.sidebar.opened
				}
			}
		default:
		console.log('default dispatched')				
			return state
	}
}

export default mainReducer