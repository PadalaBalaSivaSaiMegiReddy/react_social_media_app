import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Rightbar({ user }) {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.following.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("http://localhost:8800/api/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`http://localhost:8800/api/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`http://localhost:8800/api/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };



  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={PF+"gift.png"} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <RemoveIcon /> : <AddIcon />}
          </button>
        )}
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
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" ,textAlign:"center"}}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
























// import "./Rightbar.css";
// import { Users } from "../../dummyData";
// import Online from "../online/Online";
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";
// import { Link } from "react-router-dom";




// function Rightbar({ user }) {
//   const PF = import.meta.env.VITE_PUBLIC_FOLDER;
//   const [friends, setFriends] = useState([]);
//   const { user: currentUser, dispatch } = useContext(AuthContext);
//   const [followed, setFollowed] = useState(
//     currentUser.following.includes(user?.id)
//   );



//   useEffect(() => {
//     const getFriends = async () => {
//       try {
//         const friendList = await axios.get("http://localhost:8800/api/users/friends/" + user._id);
//         setFriends(friendList.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getFriends();
//   }, [user]);

//   const handleClick = async () => {
//     try {
//       if (followed) {
//         await axios.put(`/users/${user._id}/unfollow`, {
//           userId: currentUser._id,
//         });
//         dispatch({ type: "UNFOLLOW", payload: user._id });
//       } else {
//         await axios.put(`/users/${user._id}/follow`, {
//           userId: currentUser._id,
//         });
//         dispatch({ type: "FOLLOW", payload: user._id });
//       }
//       setFollowed(!followed);
//     } catch (err) {
//       console.log(err)
//     }
//   };

//   console.log(user._id);


//   const ProfileRightbar = () => {
//     const PF = import.meta.env.VITE_PUBLIC_FOLDER;
//     return (
//       <>
//         <h4 className="rightbarTitle">User information</h4>
//         <div className="rightbarInfo">
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">City:</span>
//             <span className="rightbarInfoValue">{user.city}</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">From:</span>
//             <span className="rightbarInfoValue">{user.from}</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">Relationship:</span>
//             <span className="rightbarInfoValue">{user.relationship==1?"Single":user.relationship==2?"Married":"No No"}</span>
//           </div>
//         </div>
//         <h4 className="rightbarTitle">User friends</h4>
//         <div className="rightbarFollowings">
//         {friends.map((friend) => (
//             <Link
//               to={"/profile/" + friend.username}
//               style={{ textDecoration: "none" }}
//             >
//           <div key={friend.username} className="rightbarFollowing">
//             <img
//               src={ `${PF}person/1.jpeg`}
//               alt=""
//               className="rightbarFollowingImg"
//             />
//             <span className="rightbarFollowingName">John Carter</span>
//           </div>
//           </Link>
//           ))}
         
          
         
//         </div>
//       </>
//     );
//   };


//   const HomeRightbar = () => {
//     const PF = import.meta.env.VITE_PUBLIC_FOLDER;
//     return (
//       <>
//         <div className="birthdayContainer">
//           <img
//             className="birthdayImg"
//             src={`${PF}gift.png`}    alt="birthdayImg"
//           />
//           <span className="birthdayText">
//             <b>Pola Foster</b> and <b>3 others</b> have their birthday today
//           </span>
//         </div>
//         <img className="rightbarAd" src={ `${PF}/ad.png` } alt="`dImg" />
//         <h4 className="rightbarTitle">Online friends</h4>
//         <ul className="rightbarFriendList">
//           {Users.map((user) => (
//             <Online key={user.id} user={user} />
//           ))}
//         </ul>
//       </>
//     );
//   };
  



//   return (
//     <div className="rightbar">
//       <div className="rightbarWrapper">
//         {user?<ProfileRightbar />:<HomeRightbar/>}
//       </div>
//     </div>
//   );
// }

// export default Rightbar;
