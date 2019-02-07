import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext'

export default class Button extends Component {
	static contextType = LanguageContext

	render() {
		const text = this.context === 'eng' ? 'Submit' : 'Отправить'

		return <button className="ui button primary">{text}</button>
	}
}
