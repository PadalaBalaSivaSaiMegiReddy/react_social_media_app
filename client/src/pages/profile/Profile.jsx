import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import "./Profile.css";

function Profile() {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  console.log(PF);

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
                src={`${PF}post/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Megi Reddy</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed username="John" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
