import React, { Component } from 'react'

export default class SearchBar extends Component {
	state = {
		term: ''
	}

	onInputChange = e => this.setState({ term: e.target.value })

	onFormSubmit = e => {
		e.preventDefault()
		this.props.onSubmit(this.state.term)
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="search">Image Search</label>
						<input
							type="text"
							name="search"
							id="search"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		)
	}
}
