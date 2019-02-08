import React from 'react'

const CommentDetail = props => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img src={props.avatar} alt="avatar" />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">{props.time}</span>
				</div>
				<div className="text">{props.text}</div>
				<div className="actions">
					<a href="/" className="reply">
						Reply
					</a>
				</div>
			</div>
			{props.children}
		</div>
	)
}

export default CommentDetail
