import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
	const items = videos.map((item) => (
		<VideoItem key={item.id.videoId} video={item} onVideoSelect={onVideoSelect} />
	))

	return <div className="ui relaxed divided list">{items}</div>
}

export default VideoList
