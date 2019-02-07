import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext'

export default class Button extends Component {
	renderSubmit(language) {
		return language === 'eng' ? 'Submit' : 'Отправить'
	}

	render() {
		return (
			<button className="ui button primary">
				<LanguageContext.Consumer>
					{({ language }) => this.renderSubmit(language)}
				</LanguageContext.Consumer>
			</button>
		)
	}
}
