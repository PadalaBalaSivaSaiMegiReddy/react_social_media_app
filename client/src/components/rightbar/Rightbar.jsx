import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";




function Rightbar({ user }) {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  const ProfileRightbar = () => {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship==1?"Single":user.relationship==2?"Married":"No No"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={ `${PF}person/1.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={ `${PF}person/2.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={ `${PF}person/3.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={ `${PF}person/4.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={ `${PF}person/5.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={ `${PF}person/6.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };


  const HomeRightbar = () => {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src={`${PF}gift.png`}    alt="birthdayImg"
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 others</b> have their birthday today
          </span>
        </div>
        <img className="rightbarAd" src={ `${PF}/ad.png` } alt="`dImg" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };
  



  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user?<ProfileRightbar />:<HomeRightbar/>}
      </div>
    </div>
  );
}

export default Rightbar;
