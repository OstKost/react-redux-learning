import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResourceList = ({ resource }) => {
	const [resources, setResources] = useState([])

	const fetchResource = async path => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/${path}`
		)
		setResources(response.data)
	}

	useEffect(() => {
		fetchResource(resource)
	}, [resource])

	return (
		<div>
			{resources
				? resources.map(({ id }) => <div key={id}>{id}</div>)
				: 'Loading...'}
		</div>
	)
}

export default ResourceList
