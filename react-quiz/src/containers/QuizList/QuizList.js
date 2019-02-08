import React, { Component } from 'react'
import styles from './QuizList.module.scss'
import { NavLink } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
// import axios from '../../axios/axios-quiz'
import { connect } from 'react-redux'
import { fetchQuizes } from '../../store/actions/quizActions'

class QuizList extends Component {
	// state = {
	// 	quizes: [],
	// 	loading: true
	// }

	renderQuizes() {
		return this.props.quizes.map(quiz => (
			<li key={quiz.id}>
				<NavLink to={`/quiz/${quiz.id}`}>{quiz.name}</NavLink>
			</li>
		))
	}

	// async componentDidMount() {
	// 	try {
	// 		const response = await axios.get('/quizes.json')
	// 		const quizes = []
	// 		Object.keys(response.data).forEach((key, index) => {
	// 			quizes.push({ id: key, name: `Тест №${index + 1}` })
	// 		})
	// 		this.setState({ quizes, loading: false })
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }
	componentDidMount() {
		this.props.fetchQuizes()
	}

	render() {
		return (
			<div className={styles.QuizList}>
				<div>
					<h1>Список тестов</h1>
					{this.props.loading && this.props.quizes !== 0 ? (
						<Loader />
					) : (
						<ul>{this.renderQuizes()}</ul>
					)}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		quizes: state.quiz.quizes,
		loading: state.quiz.loading
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchQuizes: () => dispatch(fetchQuizes())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuizList)
