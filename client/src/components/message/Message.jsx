import './Message.css'

function Message({own}) {
  return (
    <div className='message own'>
        <div className="messageTop">
            <img className='messageImg' src="../../src/assets/person/4.jpeg" alt="" />
            <p className='messageText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos nisi ipsa illum, magni est quasi laudantium nobis nihil, ipsum beatae temporibus totam? Sunt quisquam aspernatur tempore aperiam ex dolores?</p>
        </div>
        <div className="messageBottom">
            1 hr ago
        </div>
    </div>
  )
}

export default Message