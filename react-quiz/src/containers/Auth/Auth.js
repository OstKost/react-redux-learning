import React, { Component } from 'react'
import styles from './Auth.module.scss'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import is from 'is_js'
// import axios from 'axios'
import { connect } from 'react-redux'
import { auth } from '../../store/actions/authActions'

class Auth extends Component {
	state = {
		isFormValid: false,
		formControls: {
			email: {
				value: '',
				type: 'email',
				label: 'Email',
				errorMessage: 'Введите корректный email',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			password: {
				value: '',
				type: 'password',
				label: 'Пароль',
				errorMessage: 'Введите корректный пароль',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6
				}
			}
		}
	}

	loginHandler = () => {
		this.props.auth(
			this.state.formControls.email.value,
			this.state.formControls.password.value,
			true
		)
		// const authData = {
		// 	email: this.state.formControls.email.value,
		// 	password: this.state.formControls.password.value,
		// 	returnSecureToken: true
		// }
		// try {
		// 	const response = await axios.post(
		// 		`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCeDlFpuMxUUZxrt0wzuf3Mnpz6fjtR4ms`,
		// 		authData
		// 	)
		// 	console.log(response.data)
		// } catch (error) {
		// 	console.log(error)
		// }
	}

	registerHandler = () => {
		this.props.auth(
			this.state.formControls.email.value,
			this.state.formControls.password.value,
			false
		)
		// const authData = {
		// 	email: this.state.formControls.email.value,
		// 	password: this.state.formControls.password.value,
		// 	returnSecureToken: true
		// }
		// try {
		// 	const response = await axios.post(
		// 		`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCeDlFpuMxUUZxrt0wzuf3Mnpz6fjtR4ms`,
		// 		authData
		// 	)
		// 	console.log(response.data)
		// } catch (error) {
		// 	console.log(error)
		// }
	}

	// через regex
	// validateEmail(email) {
	// 	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	// 	return re.test(String(email).toLowerCase())
	// }

	validateControl(value, validation) {
		if (!validation) return true

		let isValid = true

		if (validation.required) {
			isValid = value.trim() !== '' && isValid
		}

		if (validation.email) {
			isValid = is.email(value) && isValid
		}

		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid
		}

		return isValid
	}

	onChangeHandler = (event, controlName) => {
		const formControls = { ...this.state.formControls }
		const control = { ...formControls[controlName] }

		control.value = event.target.value
		control.touched = true
		control.valid = this.validateControl(control.value, control.validation)

		formControls[controlName] = control

		let isFormValid = true
		Object.keys(formControls).forEach(name => {
			isFormValid = formControls[name].valid && isFormValid
		})

		this.setState({ formControls, isFormValid })
	}

	renderInputs() {
		return Object.keys(this.state.formControls).map(
			(controlName, index) => {
				const control = this.state.formControls[controlName]
				return (
					// <Input
					// 	key={controlName + index}
					// 	type={control.type}
					// 	value={control.value}
					// 	label={control.label}
					// 	valid={control.valid}
					// 	touched={control.touched}
					// 	errorMessage={control.errorMessage}
					// 	shouldValidate={!!control.validation}
					// 	onChange={event =>
					// 		this.onChangeHandler(event, controlName)
					// 	}
					// />
					<Input
						key={controlName + index + 1}
						{...control}
						shouldValidate={!!control.validation}
						onChange={event =>
							this.onChangeHandler(event, controlName)
						}
					/>
				)
			}
		)
	}

	render() {
		return (
			<div className={styles.Auth}>
				<div>
					<h1>Авторизация</h1>
					<form
						onSubmit={event => event.preventDefault()}
						className={styles.AuthForm}
					>
						{this.renderInputs()}
						<div>
							<Button
								type="success"
								onClick={this.loginHandler}
								disabled={!this.state.isFormValid}
							>
								Войти
							</Button>
							<Button
								type="primary"
								onClick={this.registerHandler}
								disabled={!this.state.isFormValid}
							>
								Зарегистрироваться
							</Button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

function mapDispatchToState(dispatch) {
	return {
		auth: (email, password, isLogin) => {
			dispatch(auth(email, password, isLogin))
		}
	}
}

export default connect(
	null,
	mapDispatchToState
)(Auth)
