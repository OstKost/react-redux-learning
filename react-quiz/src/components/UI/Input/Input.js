import React from 'react'
import styles from './Input.module.scss'

function isInvalid({ valid, touched, shouldValidate }) {
	return !valid && shouldValidate && touched
}

const Input = props => {
	const type = props.type || 'text'
	const classes = [styles.Input]
	const htmlFor = `${type}-${Math.round(Math.random() * 1000)}`

	if (isInvalid(props)) classes.push(styles.invalid)

	return (
		<div className={classes.join(' ')}>
			<label htmlFor={htmlFor}>{props.label}</label>
			<input
				type={type}
				value={props.value}
				onChange={props.onChange}
				name={htmlFor}
				id={htmlFor}
			/>

			{isInvalid(props) ? (
				<span>{props.errorMessage || 'Введите верное значение'}</span>
			) : (
				''
			)}
		</div>
	)
}

export default Input
