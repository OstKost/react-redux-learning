import React, { useState } from 'react'
import ResourceList from './ResourceList'

const App = () => {
	const [resource, setResource] = useState('users')

	return (
		<div>
			<div>
				<button onClick={() => setResource('posts')}>Get posts</button>
				<button onClick={() => setResource('todos')}>Get todos</button>
				<ResourceList resource={resource} />
			</div>
		</div>
	)
}

export default App
