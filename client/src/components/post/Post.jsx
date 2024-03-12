import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="../src/assets/person/1.jpeg" alt="ProfileImg" />
                    <span className='postUserName'>Megi Reddy</span>
                    <span className='postDate'>5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">Hey! It's my first post :)</span>
                <img className='postImg' src="../src/assets/posts/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="../src/assets/like.png" alt="LikeIcon" />
                    <img className='likeIcon' src="../src/assets/heart.png" alt="HeartIcon" />
                    <span className="postLikeCounter">22 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Post