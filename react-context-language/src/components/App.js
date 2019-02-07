import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'

const style = {
	margin: '5px'
}

export default class App extends Component {
	state = {
		language: 'eng'
	}

	onLanguageChange = language => this.setState({ language })

	render() {
		return (
			<div className="ui container">
				<div>
					<span>Select a language:</span>
					<i
						className="flag uk"
						onClick={() => this.onLanguageChange('eng')}
						style={style}
					/>
					<i
						className="flag ru"
						onClick={() => this.onLanguageChange('rus')}
						style={style}
					/>
				</div>
				<LanguageContext.Provider value={this.state.language}>
					<UserCreate />
				</LanguageContext.Provider>
			</div>
		)
	}
}
