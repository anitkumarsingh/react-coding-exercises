import { Route, Routes } from 'react-router-dom';
import WithProps from '../pages/Counter/WithProps/WithProps';
import WithContext from '../pages/Counter/Context/CounterProvider';
import Home from '../pages/Home';

const MainRoute = () => {
	return (
		<Routes>
			<Route index path='/' element={<Home />} />
			<Route path='withprops' element={<WithProps />} />
			<Route path='context' element={<WithContext />} />
		</Routes>
	);
};

export default MainRoute;
