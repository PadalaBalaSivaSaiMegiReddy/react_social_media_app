import Post from '../post/Post'
import Share from '../share/Share'
import './Feed.css'
import { useEffect, useState } from 'react'
import axios from "axios";

function Feed({username}) {
  const [posts,setPosts]=useState([]);

  const fetchTimeline=async()=>{
    const response = username?await axios.get("http://localhost:8800/api/posts/profile/"+username):  await axios.get("http://localhost:8800/api/posts/timeline/65ebfcc6ac8ae8779ea02b6d");
    setPosts(response.data); 
  }
  useEffect(()=>{
    fetchTimeline();

  },[username]);
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