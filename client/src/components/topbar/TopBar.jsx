import './TopBar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

function TopBar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">MegiSocial</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className='searchIcon'/>
            <input placeholder="Search for posts,friends or videos" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">HomePage</span>
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
                       <img src="../src/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default TopBar