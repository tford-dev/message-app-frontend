import React from 'react'
import styled from "styled-components";
import { Avatar } from '@material-ui/core';


const SidebarChat = () => {
    return (
        <Container>
            <Avatar />
            <SidebarChatInfo>
                <h2>Room name</h2>
                <p>This is the last message sent</p>
            </SidebarChatInfo>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;
    &:hover {
        background-color: #ebebeb;
    }
`;
const SidebarChatInfo = styled.div`
    margin-left: 15px;
    & > h2 {
        font-size: 16px;
        margin-bottom: 8px;
    }

`;

export default SidebarChat
