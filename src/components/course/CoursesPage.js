import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import {bindActionCreators} from 'redux'
import CourseList from './CourseList'
import {browserHistory} from 'react-router'

class CoursesPage extends Component {
	constructor(props, context) {
		super(props, context)
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div> 
	}

	redirectToAddCoursePage(){
		browserHistory.push('/course')
	}

	render () {
		const {courses} = this.props
		return (
			<div>
				<h1>Courses</h1>
				<input 	type="submit"
								value="Add Course"
								className="btn btn-primary"
								onClick={this.redirectToAddCoursePage}/>
				<CourseList courses={courses}/>
			</div>
		)
	}
}

CoursesPage.propTypes = {
	// dispatch: PropTypes.func.isRequired, -> since making the mapDispatchToProps func, dispatch is being wrapped around the call to the actino and not being passed as a prop itsefl	
	actions: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps){
	return {
		courses: state.courses
	}
}

//this creates a function within props that calls the createcourse Action
function mapDispatchToProps(dispatch){
	return{
		// createCourse: course => dispatch(courseActions.createCourse(course)) -> old way
		// below using bindActionCreators helper
		actions: bindActionCreators(courseActions, dispatch)
	}
}

// connect adds a parameter (if a 2nd arugement(mapDispatchToProps) is not specified after mapstate..) which will add a dispatch prop to Course. this allows you to call an action for redux

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
