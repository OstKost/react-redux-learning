import { useState, useEffect } from 'react'
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
		if (resource) fetchResource(resource)
	}, [resource])

	return resources
}

export default useResources
