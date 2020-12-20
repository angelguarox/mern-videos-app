import Video from './video.model';

export const getAllVideos = async (req, res) => {
	try{
		const videos = await Video.findAll();
		return res.json(videos);
	}
	catch(e){
		return res.status(304).json({message: e});
	}
};

export const getOneVideo = async (req, res) => {
	const {id} = req.params;
	const videoFound = await Video.findOne({where: {id}});
	if(!videoFound){
		return res.status(404).json({message: 'Video id not exists'});
	}
	else{
		return res.json(videoFound);
	}
};

export const createVideo = async (req, res) => {
	const {title, url, description} = req.body;
	const videoFound = await Video.findOne({where: {url}});
	if(videoFound){
		return res.status(301).json({message: 'URL already exists'});
	}
	else{
		if(title == '' || url == ''){
			return res.status(301).json({message: 'Title and URL fields are required'});
		}
		else{
			const newVideo = await Video.create({title, url, description}, {fields: ['title', 'url', 'description']});
			return res.json({message: 'Created video', data: newVideo});
		}
	}
};

export const updateVideo = async (req, res) => {
	const {title, url, description} = req.body;
	const {id} = req.params;
	const videoFound = await Video.findAll({attributes: ['id', 'title', 'url', 'description'], where: {id}});
	try{
		if(videoFound.length > 0){
			videoFound.forEach(async (Video) => {
				if(title == '' || url == ''){
					return res.status(301).json({message: 'Title and URL fields are required'});
				}
				else{
					const updatedVideo = await Video.update({title, url, description});
					return res.json({message: 'Updated video', data: updatedVideo});
				}
			});
		}
		else{
			return res.status(404).json({message: 'Video id not exists'});
		}
	}
	catch(e){
		return res.status(500).json({message: 'Something goes wrong', data: e});
	}
};

export const deleteVideo = async (req, res) => {
	const {id} = req.params;
	const videoFound = await Video.destroy({where: {id}});
	if(!videoFound){
		return res.status(404).json({message: 'Video id not exists'});
	}
	else{
		return res.json({message: 'Deleted video', data: videoFound});
	}
};