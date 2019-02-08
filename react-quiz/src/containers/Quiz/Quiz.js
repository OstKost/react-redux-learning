import React, { Component } from 'react'
import styles from './Quiz.module.scss'
import ActiveQuestion from '../../components/ActiveQuestion/ActiveQuestion'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import Loader from '../../components/UI/Loader/Loader'
// import axios from '../../axios/axios-quiz'
import { connect } from 'react-redux'
import {
	fetchQuizById,
	quizAnswerClick,
	retryQuiz
} from '../../store/actions/quizActions'

class Quiz extends Component {
	// state = {
	// 	isFinished: false,
	// 	activeQuestion: 0,
	// 	answerState: null,
	// 	quiz: [],
	// 	results: {},
	// 	loading: true
	// }

	// onAnswerClickHandler = answerId => {
	// 	if (this.props.answerState) return
	// 	// if (this.state.answerState) {
	// 	// 	const key = Object.keys(this.state.answerState)[0]
	// 	// 	if (this.state.answerState[key] === 'right') return
	// 	// }

	// 	const question = this.state.quiz[this.state.activeQuestion]
	// 	const results = this.state.results

	// 	// if (question.rightAnswerId === answerId) {
	// 	// 	if (!results[answerId]) {
	// 	// 		results[answerId] = 'right'
	// 	// 	}

	// 	// 	this.setState({
	// 	// 		answerState: { [answerId]: 'right' },
	// 	// 		results
	// 	// 	})
	// 	// } else {
	// 	// 	results[answerId] = 'wrong'
	// 	// 	this.setState({
	// 	// 		answerState: { [answerId]: 'wrong' },
	// 	// 		results
	// 	// 	})
	// 	// }

	// 	const finalAnswer =
	// 		question.rightAnswerId === answerId ? 'right' : 'wrong'
	// 	results[question.id] = finalAnswer
	// 	this.setState({
	// 		answerState: { [answerId]: finalAnswer },
	// 		results
	// 	})

	// 	const timeout = window.setTimeout(() => {
	// 		if (this.isQuizFinished()) {
	// 			this.setState({
	// 				isFinished: true
	// 			})
	// 		} else {
	// 			this.setState({
	// 				activeQuestion: this.state.activeQuestion + 1,
	// 				answerState: null
	// 			})
	// 		}

	// 		window.clearTimeout(timeout)
	// 	}, 700)
	// }

	// isQuizFinished() {
	// 	return this.state.activeQuestion + 1 === this.state.quiz.length
	// }

	// onRetryHandler = () => {
	// 	this.setState({
	// 		activeQuestion: 0,
	// 		answerState: null,
	// 		isFinished: false,
	// 		results: {}
	// 	})
	// }

	// async componentDidMount() {
	// 	try {
	// 		const response = await axios.get(
	// 			`/quizes/${this.props.match.params.id}.json`
	// 		)
	// 		const quiz = response.data

	// 		this.setState({
	// 			quiz,
	// 			loading: false
	// 		})
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	componentDidMount() {
		this.props.fetchQuizById(this.props.match.params.id)
	}

	componentWillUnmount() {
		this.props.retryQuiz()
	}

	render() {
		return (
			<div className={styles.Quiz}>
				<div className={styles.QuizWrapper}>
					<h1>Ответьте на все вопросы</h1>

					{this.props.loading || !this.props.quiz ? (
						<Loader />
					) : this.props.isFinished ? (
						<FinishedQuiz
							results={this.props.results}
							quiz={this.props.quiz}
							onRetry={this.props.retryQuiz}
						/>
					) : (
						<ActiveQuestion
							question={
								this.props.quiz[this.props.activeQuestion]
									.question
							}
							answers={
								this.props.quiz[this.props.activeQuestion]
									.answers
							}
							// onAnswerClick={this.onAnswerClickHandler}
							onAnswerClick={this.props.quizAnswerClick}
							quizLength={this.props.quiz.length}
							answerNumber={this.props.activeQuestion + 1}
							state={this.props.answerState}
						/>
					)}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		// results: state.quiz.results,
		// isFinished: state.quiz.isFinished,
		// activeQuestion: state.quiz.activeQuestion,
		// answerState: state.quiz.answerState,
		// quiz: state.quiz.quiz,
		// loading: state.quiz.loading
		...state.quiz
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchQuizById: id => dispatch(fetchQuizById(id)),
		quizAnswerClick: id => dispatch(quizAnswerClick(id)),
		retryQuiz: () => dispatch(retryQuiz())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Quiz)
