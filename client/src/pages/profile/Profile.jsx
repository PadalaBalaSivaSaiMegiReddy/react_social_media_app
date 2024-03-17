import { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import "./Profile.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Profile() {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const username = useParams().username


  const [user,setUser]=useState({});


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/users?username=${username}`);
  
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [username]);


 

  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture||`${PF}post/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture||`${PF}person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
