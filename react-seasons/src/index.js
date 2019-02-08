import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends Component {
	state = {
		latitude: 0,
		errorMessage: ''
	}

	renderContent() {
		if (this.state.errorMessage)
			return <div>Error: {this.state.errorMessage}</div>

		if (!this.state.latitude && !this.state.errorMessage)
			return (
				<Spinner message="Подтвердите доступ к вашему местоположению" />
			)

		if (this.state.latitude)
			return <SeasonDisplay lat={this.state.latitude} />
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ latitude: position.coords.latitude }),
			error => this.setState({ errorMessage: error.message })
		)
	}

	render() {
		return <div className="border red">{this.renderContent()}</div>
	}
}

ReactDOM.render(<App />, document.querySelector('#root'))
