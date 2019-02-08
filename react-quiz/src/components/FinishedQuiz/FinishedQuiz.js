import React from 'react'
import styles from './FinishedQuiz.module.scss'
import Button from '../UI/Button/Button';
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {
	const successCount = Object.keys(props.results).reduce((total, key) => {
		if (props.results[key] === 'right') {
			total++
		}
		return total
	}, 0)

	return (
		<div className={styles.FinishedQuiz}>
			<ul>
				{props.quiz.map((quizItem, index) => {
					const classes = [
						'fa',
						props.results[quizItem.id] === 'wrong'
							? 'fa-times'
							: 'fa-check',
						styles[props.results[quizItem.id]]
					]

					return (
						<li key={index}>
							<strong>{index + 1}</strong>
							.&nbsp;
							{quizItem.question}
							<i className={classes.join(' ')} />
						</li>
					)
				})}
			</ul>

			<p>{`Правильно ${successCount} из ${props.quiz.length}`}</p>

			<div>
				<Button onClick={props.onRetry} type='primary'>Повторить</Button>
				<Link to={'/'}>
					<Button onClick={props.onRetry} type='success'>Перейти в список тестов</Button>				
				</Link>				
			</div>
		</div>
	)
}

export default FinishedQuiz
