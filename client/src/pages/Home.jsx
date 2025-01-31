import React from 'react'
import Post from '../components/Post'
import { apiClient } from '../config/axios';
import '../components/style/smallcomponents.scss';
import { useLocation } from 'react-router';
function Home() {
  //posts
  const [posts,setPosts] = React.useState([]);
  //search
  const category = useLocation().search;

  React.useEffect(()=>{
    const fetchPosts = async()=>{
      try{
        const response = await apiClient.get(`/posts/${category}`);
        setPosts(response.data);
      }catch(error){
        console.error('Error fetching posts:',error);
      }
    }
    fetchPosts();
  },[category])
  return (
    <div className="home">
      {posts.map((post,index)=>(
        <Post 
          key={index}
          id={post.id} 
          title={post.title} 
          img={post.img} 
          description={post.describtion}
          iseven={post.id%2===0}
        />
      ))}
    </div>
  )
}

export default Home