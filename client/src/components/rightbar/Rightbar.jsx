import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const HomeRightbar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img
          className="birthdayImg"
          src="../src/assets/gift.png"
          alt="birthdayImg"
        />
        <span className="birthdayText">
          <b>Pola Foster</b> and <b>3 others</b> have their birthday today
        </span>
      </div>
      <img className="rightbarAd" src="../src/assets/ad.png" alt="AdImg" />
      <h4 className="rightbarTitle">Online friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((user) => (
          <Online key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Hyderabad</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Complicated</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="../src/assets/person/1.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="../src/assets/person/2.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="../src/assets/person/3.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="../src/assets/person/4.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="../src/assets/person/5.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="../src/assets/person/6.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
    </>
  );
};

function Rightbar({ profile }) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile?<ProfileRightbar />:<HomeRightbar/>}
      </div>
    </div>
  );
}

export default Rightbar;
