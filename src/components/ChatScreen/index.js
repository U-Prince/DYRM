import React, { useState } from 'react';
import './index.css';
import Avatar from '@material-ui/core/Avatar';

const ChatScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Mark',
            image: '...',
            message: 'Whats up'
        },
        {
            message: 'Good'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Elen on 10/08/2020</p>
            {
                messages.map((message, i) => (
                    message.name ?
                        (<div className="chatScreen__message" key={i}>
                            <Avatar className="chatScreen__image" alt={message.name} src={message.image}/>
                            <p className="chatScreen__text">
                                {message.message}
                            </p>
                        </div>)
                    : (<div className="chatScreen__message" key={i}>
                            <p className="chatScreen__textUser">
                                {message.message}
                            </p>
                    </div>)
                ))
            }

                <form className="chatScreen_input">
                    <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message"
                        className="chatScreen_inputField"
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
                </form>

        </div>
    )
}

export default ChatScreen;