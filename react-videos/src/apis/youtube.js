import axios from 'axios'

const KEY = 'AIzaSyASJBH99qb5x13gyE6wweitjtNSa6q4NK8'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY
	}
})
