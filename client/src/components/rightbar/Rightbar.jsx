import './Rightbar.css'
import {Users} from "../../dummyData"

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="../src/assets/gift.png" alt="birthdayImg" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 others</b> have their birthday today</span>
        </div>
        <img className='rightbarAd' src="../src/assets/ad.png" alt="AdImg" />
        <h4 className='rightbarTitle'>Online friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="../src/assets/person/3.jpeg" className='rightbarProfileImg' alt="" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>

        </ul>

      </div>
    </div>
  )
}

export default Rightbar