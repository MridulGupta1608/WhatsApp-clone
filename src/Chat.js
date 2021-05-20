import { Avatar, IconButton } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import './Chat.css';


function Chat() {
    const [input, setInput] = useState("")
    const [seed, setSeed] = useState("");



    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);


    const sendMessage = (e) => {
        e.preventDefault();
        setInput("");

    };

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />

                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen ...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && "chat_reciever"}`}>
                    <span className="chat_name">
                        Stark
                    </span>
                    Heyy

                    <span className="chat_timestamp">3:34 pm</span>
                </p>
            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} type="text" placeholder="Type a message" onChange={(e) => { setInput(e.target.value) }} />
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />

            </div>

        </div>
    )
}

export default Chat