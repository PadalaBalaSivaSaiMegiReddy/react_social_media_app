import './Online.css'

function Online({user}) {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={PF+user.profilePicture} className='rightbarProfileImg' alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  )
}

export default Online