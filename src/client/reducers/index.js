import { combineReducers } from 'redux'
import mainReducer from './main'
import usersReducer from './users'

const appReducer = combineReducers({
	mainReducer,
	usersReducer,
	//some reducers here....
})

export default appReducer