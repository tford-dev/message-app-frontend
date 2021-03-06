import React from 'react';
import styled from "styled-components";
import SidebarChat from "./SidebarChat";

//Material UI
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

const Sidebar = () => {
    return (
        <Container>
            <SidebarHeader>
                <Avatar src="https://avatars.githubusercontent.com/u/64376406?s=40&v=4" />
                <SidebarHeaderRight>
                    <IconButton> {/*Allows icons appear to be a clickable button*/}
                        <DonutLargeIcon />  
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </SidebarHeaderRight>
            </SidebarHeader>

            <SidebarSearch>
                <SidebarSearchContainer>
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </SidebarSearchContainer>
            </SidebarSearch>

            <SidebarChats>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </SidebarChats>
        </Container>       
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    //35% of screen
    flex: 0.35;
`;

const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-right: 1px solid lightgray;
`;

const SidebarHeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;

    //Does not change much
    & > .MuiSvgIcon-root {
        margin-right: 2vw;
        font-size: 24px !important;
    }
`;

const SidebarSearch = styled.div`
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    height: 39px;
    padding: 10px;
`;

const SidebarSearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;

    & > .MuiSvgIcon-root {
        color: gray;
        padding 10px;
    }

    & > input {
        border: none;
        outline-width: 0;
        margin-left: 10px;
    }
`;

const SidebarChats = styled.div`
    flex: 1;
    background-color: white;
    overflow: scroll;
`;

export default Sidebar
