import React, { Component } from 'react'
import styles from './QuizCreator.module.scss'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Select from '../../components/UI/Select/Select'
import {
	createControl,
	validateControl,
	validateFormControl
} from '../../form/formFramework'
// import axios from '../../axios/axios-quiz'
import { connect } from 'react-redux'
import { addQuestion, createQuiz } from '../../store/actions/createQuizActions'

function createOptionControl(num) {
	return createControl(
		{
			label: `Вариант ${num}`,
			errorMessage: 'Значение не может быть пустым',
			id: num
		},
		{ required: true }
	)
}

function createFormControls() {
	return {
		question: createControl(
			{
				label: 'Введите вопрос',
				errorMessage: 'Вопрос не может быть пустым'
			},
			{ required: true }
		),
		option1: createOptionControl(1),
		option2: createOptionControl(2),
		option3: createOptionControl(3),
		option4: createOptionControl(4)
	}
}

class QuizCreator extends Component {
	state = {
		// quiz: [],
		formControls: createFormControls(),
		rightAnswerId: 1,
		isFormValid: false
	}

	addQuestionHandler = () => {
		// const quiz = this.props.quiz.concat()
		const index = this.props.quiz.length + 1

		const {
			question,
			option1,
			option2,
			option3,
			option4
		} = this.state.formControls

		const questionItem = {
			question: question.value,
			id: index,
			rightAnswerId: this.state.rightAnswerId,
			answers: [
				{ text: option1.value, id: option1.id },
				{ text: option2.value, id: option2.id },
				{ text: option3.value, id: option3.id },
				{ text: option4.value, id: option4.id }
			]
		}

		// quiz.push(questionItem)

		this.props.addQuestion(questionItem)

		this.setState({
			// quiz,
			formControls: createFormControls(),
			rightAnswerId: 1,
			isFormValid: false
		})
	}

	// createQuizHandler = async () => {
	// 	// axios
	// 	// 	.post(
	// 	// 		'https://react-quiz-e007c.firebaseio.com/quizes.json',
	// 	// 		this.state.quiz
	// 	// 	)
	// 	// 	.then(response => {
	// 	// 		console.log(response)
	// 	// 	})
	// 	// 	.catch(error => {
	// 	// 		console.log(error)
	// 	// 	})

	// 	try {
	// 		await axios.post('/quizes.json', this.state.quiz)
	// 		this.setState({
	// 			quiz: [],
	// 			formControls: createFormControls(),
	// 			rightAnswerId: 1,
	// 			isFormValid: false
	// 		})
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	createQuizHandler = () => {
		try {
			this.setState({
				formControls: createFormControls(),
				rightAnswerId: 1,
				isFormValid: false
			})
			this.props.createQuiz()
		} catch (error) {
			console.log(error)
		}
	}

	onChangeHandler = (value, controlName) => {
		const formControls = { ...this.state.formControls }
		const control = { ...formControls[controlName] }

		control.value = value
		control.touched = true
		control.valid = validateControl(control.value, control.validation)

		formControls[controlName] = control

		this.setState({
			formControls,
			isFormValid: validateFormControl(formControls)
		})
	}

	selectChangeHandler = event => {
		this.setState({
			rightAnswerId: +event.target.value
		})
	}

	renderInputs() {
		return Object.keys(this.state.formControls).map(
			(controlName, index) => {
				const control = this.state.formControls[controlName]
				return (
					<React.Fragment key={controlName + index}>
						<Input
							{...control}
							shouldValidate={!!control.validation}
							onChange={event =>
								this.onChangeHandler(
									event.target.value,
									controlName
								)
							}
						/>
						{index === 0 ? <hr /> : null}
					</React.Fragment>
				)
			}
		)
	}

	render() {
		return (
			<div className={styles.QuizCreator}>
				<div>
					<h1>Создание теста</h1>
					<form
						onSubmit={event => event.preventDefault()}
						className={styles.AuthForm}
					>
						{this.renderInputs()}
						<Select
							label="Выберите правильный ответ"
							value={this.state.rightAnswerId}
							onChange={this.selectChangeHandler}
							options={[
								{ text: 1, value: 1 },
								{ text: 2, value: 2 },
								{ text: 3, value: 3 },
								{ text: 4, value: 4 }
							]}
						/>
						<div>
							<Button
								type="primary"
								onClick={this.addQuestionHandler}
								disabled={!this.state.isFormValid}
							>
								Добавить вопрос
							</Button>
							<Button
								type="primary"
								onClick={this.createQuizHandler}
								disabled={this.props.quiz.length === 0}
							>
								Создать тест
							</Button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		quiz: state.createQuiz.quiz
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addQuestion: item => dispatch(addQuestion(item)),
		createQuiz: () => dispatch(createQuiz())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuizCreator)
