import React, { useState } from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'

const App = () => {
	const [resource, setResource] = useState('')

	return (
		<div>
			<UserList />
			<div>
				<button onClick={() => setResource('posts')}>Get posts</button>
				<button onClick={() => setResource('todos')}>Get todos</button>
				<ResourceList resource={resource} />
			</div>
		</div>
	)
}

export default App
