import React, { Component, PropTypes } from 'react'
import Header from './common/Header'

export default class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Header />
				{this.props.children}
			}
			</div>
		)
	}
}


App.propTypes = {
  children: PropTypes.object.isRequired
};