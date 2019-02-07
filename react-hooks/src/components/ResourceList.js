import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = resource => {
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

	return resources
}

const ResourceList = ({ resource }) => {
	const resources = useResources(resource)

	return (
		<div>
			{resources
				? resources.map(({ id, title }) => <div key={id}>{title}</div>)
				: 'Loading...'}
		</div>
	)
}

export default ResourceList
