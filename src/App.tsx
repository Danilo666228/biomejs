import { useState } from 'react';
import './App.css';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

function App() {
	const [count, setCount] = useState<any>(0);

	return (
		<>
			<div>
				<a href="https://vite.dev" rel="noreferrer" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" rel="noreferrer" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vidddddtdddedd123 + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
