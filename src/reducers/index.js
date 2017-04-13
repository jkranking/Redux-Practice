import {combineReducers} from 'redux'
import courses from './courseReducer'

const rootReducer = combineReducers({
	// below is the short hand property name (es6) for courses: courses
	courses
})

export default rootReducer