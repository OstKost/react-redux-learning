import React, { Component } from 'react'
import UserCreate from './UserCreate'
import { LanguageStore } from '../context/LanguageContext'
import LanguageSelector from './LanguageSelector'

export default class App extends Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					<UserCreate />
				</LanguageStore>
			</div>
		)
	}
}
