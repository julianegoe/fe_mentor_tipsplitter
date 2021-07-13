import React from 'react';
import './tipOutput.css';

function TipOutput({ tipPerPerson, totalPerPerson, reset }) {
	return (
		<div className='output-container'>
			<div className='output-label'>
				Tip Amount
				<div className='per-person'>/ person</div>
			</div>
			<div className='output-value'>${tipPerPerson.toFixed(2)}</div>
			<div className='output-label'>
				Total
				<div className='per-person'>/ person</div>
			</div>
			<div className='output-value'>${totalPerPerson.toFixed(2)}</div>
			<button
				className='reset-btn'
				onClick={() => {
					reset();
				}}>
				RESET
			</button>
		</div>
	);
}

export default TipOutput;
