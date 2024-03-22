import ChatOnline from '../../components/chatOnline/ChatOnline'
import Conversation from '../../components/conversations/Conversation'
import Conversations from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
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
              <Message/>
              <Message/>
              <Message own/>
              <Message/>
              <Message/>
            </div>
            <div className="chatBoxBottom">
                <textarea placeholder='wite a message...' className='chatMessageInput'></textarea>
                <button className='chatSubmitButton'> Send</button>
            </div>
        </div>
            
        </div>
        <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
        </div>
            
        </div>
    </div>
    </>
  )
}

export default Messenger