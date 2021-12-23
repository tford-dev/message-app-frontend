import './App.css';
import styled from "styled-components";
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat'; 

function App() {
	return (
		<Container>
		<Body>
			<Sidebar />
			<Chat />
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
