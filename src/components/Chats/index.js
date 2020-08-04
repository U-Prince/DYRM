import React from 'react';
import './index.css';
import Chat from '../Chat';

const Chats = () => {
    return (
        <div className="chats">
            <Chat 
                name="Mark"
                message="Yo whats up"
                timestamp="3 days ago"
                profilePic="..."
            />
            <Chat 
                name="U Prince"
                message="Yo whats up"
                timestamp="35 minutes ago"
                profilePic="..."
            />
            <Chat 
                name="Monika Goswami"
                message="Yo whats up"
                timestamp="40 s"
                profilePic="..."
            />
        </div>
    )
}

export default Chats;