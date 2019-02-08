import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
	return (
		<>
			<div className="ui container comments">
				<h3 className="ui dividing header">Comments</h3>

				<CommentDetail
					author="Matt"
					time="today"
					text="Как артистично!"
					avatar={faker.image.avatar()}
				/>
				<CommentDetail
					author="Elliot Fu"
					time="Вчера в 12:30 утра"
					text="Это будет очень полезно для моих исследований.
							Спасибо!"
					avatar={faker.image.avatar()}
				>
					<div className="comments">
						<CommentDetail
							author="Дженни Хесс"
							time="Только что"
							text="Елиот, ты как всегда, прав."
							avatar={faker.image.avatar()}
						/>
						<CommentDetail
							author="Дженни Хесс"
							time="Только что"
							text="Елиот, ты как всегда, прав."
							avatar={faker.image.avatar()}
						/>
					</div>
				</CommentDetail>

				<CommentDetail
					author="Джо Хендерсон"
					time="5 дней назад"
					text="Чувак, это удивительно. Огромное спасибо."
					avatar={faker.image.avatar()}
				/>

				<form className="ui reply form">
					<div className="field">
						<textarea />
					</div>
					<div className="ui blue labeled submit icon button">
						<i className="icon edit" /> Add Reply{' '}
					</div>
				</form>
			</div>
			<hr />
			<div className="ui container comments cars">
				<h3 className="ui dividing header">Comments to Approve</h3>

				<ApprovalCard>
					<CommentDetail
						author="Джо Хендерсон"
						time="5 дней назад"
						text="Чувак, это удивительно. Огромное спасибо."
						avatar={faker.image.avatar()}
					/>
				</ApprovalCard>

				<ApprovalCard />

				<ApprovalCard>
					<CommentDetail
						author="Matt"
						time="today"
						text="Как артистично!"
						avatar={faker.image.avatar()}
					/>
				</ApprovalCard>

				<ApprovalCard>
					<h4>Внимание!</h4>
					<span>Вы точно хотите это сделать?</span>
				</ApprovalCard>
			</div>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
