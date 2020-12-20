import React, {useEffect, useState} from 'react';
import * as videoService from './VideoService';
import VideoItem from './VideoItem';

const VideoList = () => {
	const [videos, setVideos] = useState([]);

	const loadVideos = async () => {
		const resp = await videoService.getAllVideos();
		const formatedVideos = resp.data.map(video => {
			return {
				...video,
				createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
				updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
			};
		}).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
		setVideos(formatedVideos);
	}

	useEffect(() => {
		loadVideos();
	}, []);

	return(
		<div className="row">
			{
				videos.map((video) => {
					return(
						<VideoItem video={video} key={video.id} loadVideos={loadVideos} />
					);
				})
			}
		</div>
	);
};

export default VideoList;