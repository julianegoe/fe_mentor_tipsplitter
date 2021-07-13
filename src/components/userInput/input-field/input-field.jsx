import React, { useEffect, useState } from 'react';
import './input-field.css';

function InputField({ icon, label, step, type, valueProp, handleInput }) {
	const [value, setValue] = useState(1);
	const [error, setError] = useState('');

	useEffect(() => {
		if (validated()) {
			handleInput(type, value);
		} else return;
	});

	const validated = () => {
		let error = '';
		let passed = false;
		if (value <= 0) {
			error = 'please enter a number greater than 0.';
		} else {
			passed = true;
		}
		setError(error);
		return passed;
	};

	return (
		<>
			<div className='input-container'>
				<label className='input-label'>{label}</label>
				<div className='field-container'>
					<img className='icon' src={icon} alt='icon'></img>
					<input
						type='number'
						min='0'
						step={step}
						value={value}
						onChange={(event) => {
							setValue(event.target.value);
						}}></input>
				</div>
				<div style={{ color: 'red' }}>{error}</div>
			</div>
		</>
	);
}

export default InputField;
