import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const Counter = () => {
	const context = useContext(CounterContext);
	const { counterHandler } = context;
	return <button onClick={counterHandler}> Increament</button>;
};

export default Counter;
