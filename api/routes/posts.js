import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/post.controller.js';

const postRouter = express.Router();

//route for getting  all posts
postRouter.get('/', getPosts);

//getpost route
postRouter.get('/:id', getPost);

//createpost route
postRouter.post('/createpost', createPost);

//delete route
postRouter.delete('/:id', deletePost);

//update route
postRouter.put('/:id', updatePost);

export default postRouter;