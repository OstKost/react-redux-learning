import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
	summer: {
		seasonText: 'Пойдём на пляж!',
		seasonIcon: 'sun'
	},
	winter: {
		seasonText: 'Бррр... Холодно!',
		seasonIcon: 'snowflake'
	}
}

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter'
	} else {
		return lat < 0 ? 'summer' : 'winter'
	}
}

const SeasonDisplay = props => {
	const season = getSeason(props.lat, new Date().getMonth())
	const {seasonText, seasonIcon} = seasonConfig[season]
	
	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left ${seasonIcon} icon massive`} />
			<h1>{seasonText} </h1>
			<i className={`icon-right ${seasonIcon} icon massive`} />
		</div>
	)
}

export default SeasonDisplay
