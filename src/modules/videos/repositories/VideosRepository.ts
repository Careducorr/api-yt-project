import { pool } from '../../../mysql';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';

class VideoRepository {
    create(request: Request, response: Response){
        const { title, description, user_id } = request.body;
        pool.getConnection((err: any, connection: any) => {

            if(err){
                return response.status(500).json(err)
            }

            connection.query(
                'INSERT INTO tb_videos(video_id, user_id, title, description) VALUES (?,?,?,?)',
                [uuidv4(), user_id, title, description],
                (error: any, result: any, fileds: any) => {
                    connection.release();
                    if (error){
                        return response.status(400).json(error)
                    }
                    response.status(200).json({message: "Vídeo criado com sucesso."})
                }
            )
        
        })
    }

    getVideos(request: Request, response: Response){
        const { user_id } = request.params;//route params
        pool.getConnection((err: any, connection: any) =>{
            connection.query(
                'SELECT * FROM tb_videos WHERE user_id = ?',
                [user_id],
                (error: any, results: any, fileds: any) =>{
                    connection.release();
                    if (error){
                        return response.status(400).json({message: "Erro ao buscar vídeos!"})
                    }
                    return response.status(200).json({message: "Vídeos retornados com sucesso.", videos: results})
                }
            )
        })
    }

    searchVideos(request: Request, response: Response){
        const { search } = request.query;//query params
        pool.getConnection((err: any, connection: any) =>{
            connection.query(
                'SELECT * FROM tb_videos WHERE title LIKE ?',
                [`%${search}%`],
                (error: any, results: any, fileds: any) => {
                    connection.release();
                    if (error){
                        return response.status(400).json({message: "Erro ao buscar vídeos!"})
                    }
                    return response.status(200).json({message: "Vídeos retornados com sucesso.", videos: results})
                }
            )
        })
    }

}


export { VideoRepository };