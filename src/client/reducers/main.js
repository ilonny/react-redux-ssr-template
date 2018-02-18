import constants from 'constants'

const initialState = {
	test: 123,
}

const mainReducer = function (state = initialState, action) {  
	switch(action.type) {
		case constants.TEST_ACTION:
			console.log('TEST_ACTION dispatched')				
			return { ...state, test: true }
		default:
			return state
	}
}

export default mainReducer