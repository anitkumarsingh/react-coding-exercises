import React, { useState } from 'react';
import Counter from './Counter';

const WithProps = () => {
	const [count, setCount] = useState(0);

	return (
		<div className='txt-center'>
			<h1>With Props passing</h1>
			{count}
			<Counter counterHandler={() => setCount(count + 1)} />
		</div>
	);
};

export default WithProps;
