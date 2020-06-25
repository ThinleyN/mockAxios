import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [ data, setData ] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const url = 'https://my-json-server.typicode.com/typicode/demo/posts';
		const res = await axios.get(url);
		setData(res.data);
	};

	return (
		<div className="App">
			<ul style={{ textAlign: 'left' }}>
				{data.map((item, key) => {
					return <li key={key}>{item.title}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
