import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext'

export default class LanguageSelector extends Component {
	static contextType = LanguageContext

	render() {
		console.log(this.context)
		return (
			<>
				<span>Select a language:</span>
				<i
					className="flag uk"
					onClick={() => this.context.onLanguageChange('eng')}
					style={{ margin: '5px' }}
				/>
				<i
					className="flag ru"
					onClick={() => this.context.onLanguageChange('rus')}
					style={{ margin: '5px' }}
				/>
			</>
		)
	}
}
