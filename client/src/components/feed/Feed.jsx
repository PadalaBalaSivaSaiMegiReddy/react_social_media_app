import Post from '../post/Post'
import Share from '../share/Share'
import './Feed.css'
import { useEffect, useState } from 'react'
import axios from "axios";

function Feed() {
  const [posts,setPosts]=useState([]);

  const fetchTimeline=async()=>{
    const response =  await axios.get("http://localhost:8800/api/posts/timeline/65ebfcc6ac8ae8779ea02b6d");
    setPosts(response.data); 
  }
  useEffect(()=>{
    fetchTimeline();

  },[]);
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map((p)=>(
        <Post key={p._id} post={p} />
        ))}

      </div>
    </div>
  )
}

export default Feed