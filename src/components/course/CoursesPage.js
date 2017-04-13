import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import {bindActionCreators} from 'redux'

class CoursesPage extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			course: { title: "" }
		}

		this.onTitleChange = this.onTitleChange.bind(this)
		this.onClickSave = this.onClickSave.bind(this)
	}

	onTitleChange(event) {
		const course = this.state.course
		course.title = event.target.value
		this.setState({course: course})
		console.log(this.state)
	}

	onClickSave(event) {
		// alert("Saving " + this.state.course.title)
		// here we will dispatch our first action which will then give you a props version of the course
		// this.props.dispatch(courseActions.createCourse(this.state.course)) -> old syntax before mapDispatch to Props function
		this.props.actions.createCourse(this.state.course)
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div> 
	}

	render () {
		return (
			<div>
				<h1>Courses</h1>
				{this.props.courses.map(this.courseRow)}
				<h2>Add Course</h2>
				<input
					type="text"
					onChange={this.onTitleChange}
					value={this.state.course.title} />

				<input
					type="submit"
					value="Save"
					onClick={this.onClickSave} />
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
