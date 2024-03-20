import './TopBar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from "../../context/AuthContext"

function TopBar() {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    const {user}=useContext(AuthContext)
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">MegiSocial</span>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className='searchIcon'/>
            <input placeholder="Search for posts, friends or videos" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>
                    </div>     
                    <div className="topbarIconItem">
                    <MessageIcon/>
                    <span className="topbarIconBadge">1</span>
                    </div>  
                    <div className="topbarIconItem">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge">1</span>
                    </div> 

                       </div>
                       <Link to={`http://localhost:5173/profile/${user.username}`}>
                       <img src={user.profilePicture?PF+user.profilePicture:PF+"person/noAvatar.png"}alt="" className="topbarImg" />
                       </Link>
        </div>
    </div>
  )
}

export default TopBar