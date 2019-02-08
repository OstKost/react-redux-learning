import React from 'react'
import styles from './Loader.module.scss'

const Loader = props => {
	// "lds-ripple"
	return (
		<div className={styles.Loader}>
			<div className={styles['lds-ripple']}>
				<div />
				<div />
			</div>
		</div>
	)
}

export default Loader
