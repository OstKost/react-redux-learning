import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID 2d86c4c2558153b700663a25f7c109825c10bd67f5ef12a8ef09b7cf06193e7a'
	}
})
