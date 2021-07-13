import React, { useState, useEffect } from 'react';
import InputField from './input-field/input-field';
import TipButtons from './tip-buttons/tip-buttons';
import dollar from '../../images/icon-dollar.svg';
import person from '../../images/icon-person.svg';

function UserInput({ setOutput }) {
	const [bill, setBill] = useState(0);
	const [tip, setTip] = useState(0);
	const [people, setPeople] = useState(1);

	useEffect(() => {
		let tipPp = (bill * tip) / 100 / people;
		let totalPp = bill / people + tipPp;
		setOutput(tipPp, totalPp);
	}, [bill, tip, people, setOutput]);

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

	return (
		<>
			<InputField
				type='dollar'
				icon={dollar}
				label='Bill'
				step='0.01'
				value={bill}
				handleInput={handleInput}
			/>
			<TipButtons type='tip' tip={tip} handleInput={handleInput} />
			<InputField
				type='person'
				icon={person}
				label='Number of People'
				step='1'
				value={people}
				handleInput={handleInput}
			/>
		</>
	);
}

export default UserInput;
