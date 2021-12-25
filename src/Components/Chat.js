import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from "styled-components";
import MicIcon from "@material-ui/icons/Mic";
import '../App.css';
import Axios from '../Axios';

const Chat = ({messages}) => {
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        await Axios.post("/messages/new", {
            message: input,
            name: "Demo App",
            timestamp: "Just now",
            recieved: false,
        })

        setInput('');
    }

    return (
        <Container>
            <ChatHeader>
                <Avatar />

                <ChatHeaderInfo>
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </ChatHeaderInfo>

                <ChatHeaderRight>
                    <IconButton> 
                        <SearchOutlined />  
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </ChatHeaderRight>
            </ChatHeader>

            <ChatBody>
                {messages.map(message => (
                    <ChatMessage key={message._id} className={!message.recieved && "chat__reciever"}>
                        <ChatName>{message.name}</ChatName>
                        {message.message}
                        <ChatTimeStamp>{message.timestamp}</ChatTimeStamp>
                    </ChatMessage>
                ))}
            </ChatBody>

            <ChatFooter>
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </ChatFooter>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    //65% of screen
    flex: 0.65;
`;

const ChatHeader = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;

const ChatHeaderInfo = styled.div`
    flex: 1;
    padding-left: 20px;

    & > h3 {
        margin-bottom: 3px;
        font-weight: 500;
    }

    & > p {
        color: gray;
    }
`;

const ChatHeaderRight = styled.div`

`;

const ChatBody = styled.div`
    flex: 1;
    background-color: #f2e6d9;
    padding: 30px;
    overflow: scroll;
`;

const ChatMessage = styled.p`
    position: relative;
    font-size: 16px;
    padding: 10px;
    width: fit-content;
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 30px;
`;

// const ChatReciever = styled.p`
//     position: relative;
//     font-size: 16px;
//     padding: 10px;
//     width: fit-content;
//     border-radius: 10px;
//     background-color: #fff;
//     margin-bottom: 30px;
//     margin-left: auto;
//     background-color: #dcf8c6;
// `;

const ChatName = styled.span`
    position: absolute;
    top: -15px;
    font-weight: 800;
    font-size: xx-small
`;

const ChatTimeStamp = styled.span`
    margin-left: 10px;
    font-size: xx-small;
`;

const ChatFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
    border-top: 1px solid lightgray;

    & > form {
        flex: 1;
        display: flex;
    }

    & > form > input {
        flex: 1;
        border-radius: 30px;
        padding: 10px;
        border: none;
        outline-width: 0;
    }
    //Button will be activated on enter
    & > form > button {
        display: none;
    }

    & > .MuiSvgIcon-root {
        padding: 10px;
        color: gray;
    }
`;

export default Chat