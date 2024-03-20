import './Share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext, useRef, useState } from 'react';
import {AuthContext} from "../../context/AuthContext"
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';

function Share() {

  const {user}=useContext(AuthContext);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const [file,setFile]=useState(null);

  const submitHandler= async (event)=>{
    event.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("http://localhost:8800/api/upload", data);
      } catch (err) {
        console.log(err)
      }
    }
    try {
      await axios.post("http://localhost:8800/api/posts",newPost)
      window.location.reload();
      
    } catch (error) {
      console.log(error)
    }
  }

  const desc =useRef()

  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={user.profilePicture?PF+user.profilePicture:PF+"person/noAvatar.png"} className='shareProfileImg' alt="" />
                <input ref={desc} className='shareInput' type="text" placeholder={`What's in you mind ${user.username}?`}/>
            </div>
            <hr className='shareHr'/>
            {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <CancelIcon className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
            <form htmlFor="file" className="shareBotTom" onSubmit={submitHandler}>
              <div className="shareOptions">
                <label className="shareOption">
                <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                  <span className='shareOptionText'>Photo or Video</span>
                  <input style={{display:"none"}} id='file' type="file" accept='.png,.jpeg,.jpg' onChange={(e)=>setFile(e.target.files[0])}/>
                </label>
                <div className="shareOption">
                <LabelIcon htmlColor='blue'  className='shareIcon'/>
                  <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                <LocationOnIcon htmlColor='green'  className='shareIcon'/>
                  <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                <EmojiEmotionsIcon htmlColor='goldenrod'  className='shareIcon'/>
                  <span className='shareOptionText'>Feelings</span>
                </div>
              <button style={{display:"inline"}} type='submit' className='shareButton'>Share</button>
              </div>
            </form>
        </div>
        </div>
  )
}

export default Share