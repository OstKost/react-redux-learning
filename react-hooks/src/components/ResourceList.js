import React from 'react'
import useResources from './useResources'

const ResourceList = ({ resource }) => {
	const resources = useResources(resource)

	return (
		<div>
			<h2>length: {resources.length}</h2>
			{resources
				? resources.map(({ id, title }) => <div key={id}>{title}</div>)
				: 'Loading...'}
		</div>
	)
}

export default ResourceList
