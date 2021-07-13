import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import UserInput from './components/userInput/userInput';
import TipOutput from './components/tipOutput/tipOutput';

import logo from './images/logo.svg';

function App() {
	const [tipPerPerson, setTipPerPerson] = useState(0);
	const [totalPerPerson, setTotalPerPerson] = useState(0);
	const [bill, setBill] = useState(0);
	const [tip, setTip] = useState(0);
	const [people, setPeople] = useState(1);

	useEffect(() => {
		let tipPp = (bill * tip) / 100 / people;
		let totalPp = bill / people + tipPp;
		setOutput(tipPp, totalPp);
	}, [bill, tip, people]);

	const handleInput = (type, value) => {
		switch (type) {
			case 'dollar':
				setBill(value);
				break;
			case 'person':
				setPeople(value);
				break;
			case 'tip':
				setTip(value);
				break;
			default:
				return;
		}
	};

	const setOutput = (tip, total) => {
		setTipPerPerson(tip);
		setTotalPerPerson(total);
	};

	const reset = () => {
		window.location.reload();
	};

	return (
		<div className='container'>
			<img src={logo} className='logo' alt='logo' />
			<div className='calculator-container'>
				<UserInput
					setOutput={setOutput}
					bill={bill}
					tip={tip}
					people={people}
					handleInput={handleInput}
				/>
				<TipOutput
					tipPerPerson={tipPerPerson}
					totalPerPerson={totalPerPerson}
					reset={reset}
				/>
			</div>
		</div>
	);
}

export default App;
