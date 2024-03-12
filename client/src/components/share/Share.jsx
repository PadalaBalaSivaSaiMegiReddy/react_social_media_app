import './Share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';

function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="../src/assets/person/1.jpeg" className='shareProfileImg' alt="" />
                <input className='shareInput' type="text" placeholder="What's in you mind Megi?"/>
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
              <div className="shareOptions">
                <div className="shareOption">
                <PermMediaIcon className='shareIcon'/>
                  <span className='shareOptionText'>Photo or Video</span>

                </div>
              </div>
            </div>
        </div>
        </div>
  )
}

export default Share