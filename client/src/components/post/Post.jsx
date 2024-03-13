import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';

function Post({post}) {
    console.log(post)
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="../src/assets/person/1.jpeg" alt="ProfileImg" />
                    <span className='postUserName'>{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="../src/assets/like.png" alt="LikeIcon" />
                    <img className='likeIcon' src="../src/assets/heart.png" alt="HeartIcon" />
                    <span className="postLikeCounter">{post.like} people like it</span>
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