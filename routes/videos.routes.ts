import { Router } from "express";
import { VideoRepository } from "../src/modules/videos/repositories/VideosRepository";
import { authorization } from "../src/middleware/authorization";

const videosRoutes = Router();
const videoRepository = new VideoRepository();

videosRoutes.post('/create-video', authorization,(request, response) => {
    videoRepository.create(request, response);
})

videosRoutes.get('/get-videos/:user_id', (request, response) => { //routes params
    videoRepository.getVideos(request, response);
})

videosRoutes.get('/get-video-by-title', (request, response) =>{ //query params
    videoRepository.searchVideos(request, response)
})

export { videosRoutes };