import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	increament,
	decreament,
	reset,
	increamentBy
} from '../../../Redux/Actions/counter';

const WithReduxCounter = () => {
	const { count } = useSelector((s) => s.count);
	const dispatch = useDispatch();

	return (
		<div className='txt-center'>
			<h1>Redux Counter App</h1>
			{count}
			<button onClick={() => dispatch(increament())}>Increament</button>
			<button onClick={() => dispatch(decreament())}>Decreament</button>
			<button onClick={() => dispatch(increamentBy(12))}>Increament By 12</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
		</div>
	);
};

export default WithReduxCounter;
