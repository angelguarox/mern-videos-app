import React from 'react';
import {useHistory} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {toast} from 'react-toastify';
import * as videoService from './VideoService';
import '../styles.css';

const VideoItem = ({video, loadVideos}) => {
	const history = useHistory();

	const handleUpdateClick = () => {
		history.push(`/update-video/${video.id}`);
	};

	const handleDeleteClick = async (id) => {
		await videoService.deleteVideo(id);
		loadVideos();
		toast.success('Deleted video successfully');
	};

	return(
		<div className="col-md-4">
			<div className="card video-card">
				<div className="card-header">
					<div className="d-flex justify-content-between">
						<h1 onClick={handleUpdateClick}>{video.title}</h1>
						<span className="text-danger text-bold" onClick={() => handleDeleteClick(video.id)}>X</span>
					</div>
				</div>
				<div className="card-body">
					<p>{video.description}</p>
					<div className="embed-responsive embed-responsive-16by9">
						<ReactPlayer url={video.url} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoItem;