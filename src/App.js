import React, { useEffect, useState } from 'react'
import './App.css';
import styled from "styled-components";
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat'; 
import Pusher from 'pusher-js';
import axios from './Axios';

function App() {
	const [messages, setMessages] = useState([]);

	useEffect(()=> {
		axios.get('/messages/sync')
			.then(response => {
				console.log(response.data);
				setMessages(response.data);
			})
	}, [])
	//Adds pusher-js when page loads
	//pusher-js makes connection to mongo-db database appear to be real-time
	useEffect(()=> {
		const pusher = new Pusher('0a26ca98fc33b1081a53', {
			cluster: 'mt1'
		});

		const channel = pusher.subscribe('messages');
			channel.bind('inserted', function(newMessage) {
			//For when a new message post request is made
			// alert(JSON.stringify(newMessage));

			//setMessage adds new message to messages in state
			setMessages([...messages, newMessage]);
		});

		return ()=> {
			channel.unbind_all();
			channel.unsubscribe();
		}

		//Listens for when messages array in useState changes	
	}, [messages])

	console.log(messages);

	return (
		<Container>
		<Body>
			<Sidebar />
			<Chat messages={messages} />
		</Body>
		</Container>
	);
}

const Container = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	background-color: #dadbd3;
`;

const Body = styled.div`
	display: flex;
	background-color: #ededed;
	margin-top: -50px;
	height: 90vh;
	width: 90vw;
	box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;

export default App;
