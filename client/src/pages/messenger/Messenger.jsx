import Conversation from '../../components/conversations/Conversation'
import Conversations from '../../components/conversations/Conversation'
import TopBar from '../../components/topbar/TopBar'
import './Messenger.css'

function Messenger() {
  return (
    <>
    <TopBar/>
    <div className='messenger'>
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input placeholder='Search for friends' className='chatMenuInput'/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </div>
        </div>
        <div className="chatBox">
        <div className="chatBoxWrapper">
            <div className="chatBoxTop">

            </div>
            <div className="chatBoxBottom">
                
            </div>
        </div>
            
        </div>
        <div className="chatOnline">
        <div className="chatOnlineWrapper">Online</div>
            
        </div>
    </div>
    </>
  )
}

export default Messenger