import React from 'react'

const ApprovalCard = props => {
	return (
		<div className="ui card">
			<div className="content">
				{props.children ? props.children : 'Продолжить?'}
			</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Одобрить</div>
					<div className="ui basic red button">Отклонить</div>
				</div>
			</div>
		</div>
	)
}

export default ApprovalCard
