import React from 'react';
import styled from "styled-components";

const Chat = () => {
    return (
        <Container>
            <h1>Chat</h1>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    //65% of screen
    flex: 0.65;
`;

export default Chat
