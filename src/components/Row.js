import React from 'react';
import Square from './Square';

const Row = () => {
	return (
		<div className="board-row">
			<Square />
			<Square />
			<Square />
		</div>
	);
};

export default Row;
