import {db} from '../config/db.config.js';


//function for get all post
export const getPosts = async (req,res) => {
    db.query(req.query.category?"SELECT * FROM posts WHERE category=?":"SELECT * FROM posts",[req.query.category],(err,data)=>{
        if(err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
}


//for getpost function
export const getPost = async (req,res) => {
    try{
        //post id
        const postId = req.params.id;

        //promise for getting post data
        const [postResults] = await new Promise((resolve,reject)=>{
            db.query('SELECT p.id, `username`, `title`, `describtion`, p.img, u.img AS userImg, `category`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ',
                [postId],(err,data)=>(err?reject(err):resolve(data)))
        })

        //if post data doesn't found
        if(!postResults){
            return res.status(404).json('post not found');
        }

        const postData = postResults;

        //suggest posts data
        const suggestData = await new Promise((resolve,reject)=>{
            db.query('SELECT * FROM posts WHERE category = ?',[postData.category],(err,data)=>(err?reject(err):resolve(data)))
        })

        const suggessionPost = suggestData.filter(item=>item.id===postData.id?null:item);

        //return the response 
        return res.status(200).json({
            post:postData,
            suggessions:suggessionPost.length>4?suggessionPost.slice(0,4):suggessionPost
        })
    }catch(err){
        console.log(err);
        return res.status(500).json('error occured: ',err);
    }
}


//fuction for addpost
export const addPost = async (req,res) => {
    
}


//function for createpost
export const createPost = async (req,res) => {

}


//function for deletepost
export const deletePost = async (req,res) => {

}


//function for updatepost
export const updatePost = async (req,res) => {

}