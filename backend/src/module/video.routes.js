import {Router} from 'express';
import * as videoCtrl from './video.controller';

const router = Router();

router.get('/videos', videoCtrl.getAllVideos);
router.get('/videos/:id', videoCtrl.getOneVideo);
router.post('/videos', videoCtrl.createVideo);
router.put('/videos/:id', videoCtrl.updateVideo);
router.delete('/videos/:id', videoCtrl.deleteVideo);

export default router;