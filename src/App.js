import React, { useState } from 'react';
import './App.css';
import './index.css';
import UserInput from './components/userInput/userInput';
import TipOutput from './components/tipOutput/tipOutput';

import logo from './images/logo.svg';

function App() {
	const [tipPerPerson, setTipPerPerson] = useState(0);
	const [totalPerPerson, setTotalPerPerson] = useState(0);

	const setOutput = (tip, total) => {
		setTipPerPerson(tip);
		setTotalPerPerson(total);
	};

	return (
		<div className='container'>
			<img src={logo} className='logo' alt='logo' />
			<div className='calculator-container'>
				<UserInput setOutput={setOutput} />
				<TipOutput
					tipPerPerson={tipPerPerson}
					totalPerPerson={totalPerPerson}
				/>
			</div>
		</div>
	);
}

export default App;
