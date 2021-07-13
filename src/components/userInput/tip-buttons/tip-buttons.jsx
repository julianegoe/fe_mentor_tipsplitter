import React, { useEffect, useState } from 'react';
import './tip-buttons.css';

function TipButtons({ type, handleInput }) {
	const [tip, setTip] = useState(0);

	useEffect(() => {
		handleInput(type, tip);
	}, [type, tip, handleInput]);

	return (
		<>
			<div className='tip-container'>
				<label className='tip-label'>Select Tip %</label>
				<button
					className='tip-btn'
					onClick={() => {
						setTip(5);
					}}>
					5%
				</button>
				<button
					className='tip-btn'
					onClick={() => {
						setTip(10);
					}}>
					10%
				</button>
				<button
					className='tip-btn'
					onClick={() => {
						setTip(15);
					}}>
					15%
				</button>
				<button
					className='tip-btn'
					onClick={() => {
						setTip(25);
					}}>
					25%
				</button>
				<button
					className='tip-btn'
					onClick={() => {
						setTip(50);
					}}>
					50%
				</button>
			</div>
		</>
	);
}

export default TipButtons;
