import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Format, format} from 'timeago.js'

function Post({post}) {
    const [like,setLike]=useState(post.likes.length)    
    const [isLiked,setIsLiked]=useState(false);
    const [user,setUser]=useState({});


    const likeHandler=()=>{
            setLike(isLiked?like-1:like+1);
            setIsLiked(!isLiked);
    }

    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    console.log(PF);
    const fetchUser=async()=>{
            const response =  await axios.get(`http://localhost:8800/users/${post.userId}`);
            setUser(response.data); 
        }
        useEffect(()=>{
            fetchUser();
    
        },[post.userId]);

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={user.profilePicture} alt="ProfileImg" />
                    <span className='postUserName'>{user.username}</span>
                    <span className='postDate'>{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={post.img?"../src/assets/post/1.jpeg":""} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img onClick={likeHandler} className='likeIcon' src="../src/assets/like.png" alt="LikeIcon" />
                    <img onClick={likeHandler} className='likeIcon' src="../src/assets/heart.png" alt="HeartIcon" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Post