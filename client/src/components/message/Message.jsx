import './Message.css'

function Message({own}) {
  return (
    <div className={own?"message own":"message"}>
        <div className="messageTop">
            <img className='messageImg' src="../../src/assets/person/4.jpeg" alt="" />
            <p className='messageText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus officia ullam iure tempora, illo natus.</p>
        </div>
        <div className="messageBottom">
            1 hr ago
        </div>
    </div>
  )
}

export default Message