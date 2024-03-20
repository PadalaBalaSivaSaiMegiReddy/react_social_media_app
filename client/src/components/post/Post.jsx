import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {Format, format} from 'timeago.js'
import {Link} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

function Post({post}) {
    const [like,setLike]=useState(post.likes.length)    
    const [isLiked,setIsLiked]=useState(false);
    const [user,setUser]=useState({});

    const{user:currentUser}=useContext(AuthContext);


    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
      }, [currentUser._id, post.likes]);


    const likeHandler=()=>{
        try {
            axios.put("http://localhost:8800/api/posts/" + post._id + "/like", { userId: currentUser._id });
          } catch (err) {
            console.log(err);
          }
          setLike(isLiked ? like - 1 : like + 1);
          setIsLiked(!isLiked);
        };
    

    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    
    const fetchUser=async()=>{
            const response =  await axios.get(`http://localhost:8800/api/users?userId=${post.userId}`);
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
                    <Link to={`http://localhost:5173/profile/${user.username}`}>
                    
                    <img className='postProfileImg' src={user.profilePicture?PF+user.profilePicture:PF+"person/noAvatar.png"} alt="ProfileImg" />
                    </Link>
            
                    <span className='postUserName'>{user.username}</span>
                    <span className='postDate'>{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={PF + post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img onClick={likeHandler} className='likeIcon' src={`${PF}like.png`} alt="LikeIcon" />
                    <img onClick={likeHandler} className='likeIcon' src={`${PF}heart.png`} alt="HeartIcon" />
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