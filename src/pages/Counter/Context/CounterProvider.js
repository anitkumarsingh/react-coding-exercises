import React, { useState } from 'react';
import Counter from './Counter';
import { CounterContext } from './CounterContext';

const CounterProvider = () => {
	const [count, setCount] = useState(0);
	const counterHandler = () => setCount(count + 1);

	return (
		<CounterContext.Provider value={{ counterHandler }}>
			<div className='txt-center'>
				<h1>With Context</h1>
				{count}
				<Counter />
			</div>
		</CounterContext.Provider>
	);
};

export default CounterProvider;
