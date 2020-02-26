import React from 'react';
import './Menu.css';

const Menu = props => {
	return (
		<>
			<div className='menu-container'>
				<div className='menu-content__container'>
                <h1 className='menu-header'>Tic Tac Toe</h1>
				<div className='btn-container'>
					<button onClick={props.click} className='menu-btn menu-btn--one'>New Game</button>
					<button className='menu-btn menu-btn--two'>Play online</button>
					<button className='menu-btn menu-btn--three'>Records</button>
				</div>
                </div>
			</div>
		</>
	);
};

export default Menu;
