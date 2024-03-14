import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import "./Profile.css";

function Profile() {
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
                src="../src/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="../src/assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Megi Reddy</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
