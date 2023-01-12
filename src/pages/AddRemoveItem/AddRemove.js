import React, { useState } from 'react';

const AddRemove = () => {
	const [list, setList] = useState([]);
	const [item, setItem] = useState('');

	const renderList = list?.map((i) => {
		return (
			<ul key={i}>
				<li onClick={() => removeItem(i)}>{i}</li>
			</ul>
		);
	});

	const addItem = () => {
		setList([...list, item]);
		setItem('');
	};
	const removeItem = (ele) => {
		setList(list.filter((i) => i !== ele));
	};
	return (
		<div className='txt-center'>
			<h1>AddRemove Item Challenge</h1>
			<input
				placeholder='add item'
				type='text'
				onChange={(e) => setItem(e.target.value)}
				value={item}
			/>
			<button onClick={addItem}>Add Item</button>
			{renderList}
		</div>
	);
};

export default AddRemove;
