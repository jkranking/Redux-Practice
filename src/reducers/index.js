import {combineReducers} from 'redux'
import courses from './courseReducer'
import authors from './authorReducer'

const rootReducer = combineReducers({
	// below is the short hand property name (es6) for courses: courses
	courses,
	authors
})

export default rootReducer