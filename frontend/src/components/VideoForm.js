import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import * as videoService from './VideoService';

const VideoForm = () => {
	const history = useHistory();
	const params = useParams();
	const initialState = {
		title: '',
		url: '',
		description: ''
	};

	const [video, setVideo] = useState(initialState);

	const handleInputChane = e => {
		setVideo({...video, [e.target.name]: e.target.value});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if(!params.id){
			await videoService.createVideo(video);
			toast.success('Created video successfully');
			setVideo(initialState);
		}
		else{
			await videoService.updateVideo(params.id, video);
			toast.success('Updated video successfully');
			setVideo(initialState);
		}
		history.push('/');
	};

	const getOneVideo = async (id) => {
		const resp = await videoService.getOneVideo(id);
		const {title, url, description} = resp.data;
		setVideo({title, url, description});
	};

	useEffect(() => {
		if(params.id){
			getOneVideo(params.id);
		}
	}, []);

	return(
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="card">
					<div className="card-header">
						<h3>New Video</h3>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<input type="text" name="title" placeholder="Title" className="form-control" autoFocus value={video.title} onChange={handleInputChane} />
							</div>
							<div className="form-group">
								<input type="url" name="url" placeholder="URL: https://hostname.com" className="form-control" value={video.url} onChange={handleInputChane} />
							</div>
							<div className="form-group">
								<textarea name="description" rows="2" placeholder="Description" className="form-control" value={video.description} onChange={handleInputChane}></textarea>
							</div>
							{
								params.id ? ( <button className="btn btn-info btn-block">Update</button> ) : ( <button className="btn btn-primary btn-block">Create</button> )
							}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoForm;