import React from 'react';
import InputField from './input-field/input-field';
import TipButtons from './tip-buttons/tip-buttons';
import dollar from '../../images/icon-dollar.svg';
import person from '../../images/icon-person.svg';
import './userinput.css';

function UserInput({ setOutput, bill, tip, people, handleInput }) {
	return (
		<div className='input-wrapper'>
			<InputField
				type='dollar'
				icon={dollar}
				label='Bill'
				step='0.01'
				valueProp={bill}
				handleInput={handleInput}
			/>
			<TipButtons type='tip' tip={tip} handleInput={handleInput} />
			<InputField
				type='person'
				icon={person}
				label='Number of People'
				step='1'
				valueProp={people}
				handleInput={handleInput}
			/>
		</div>
	);
}

export default UserInput;
