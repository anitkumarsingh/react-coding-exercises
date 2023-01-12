import { Route, Routes } from 'react-router-dom';
import WithProps from '../pages/Counter/WithProps/WithProps';
import WithContext from '../pages/Counter/Context/CounterProvider';
import Home from '../pages/Home';
import WithReduxCounter from '../pages/Counter/WithRedux/WithReduxCounter';
import AddRemove from '../pages/AddRemoveItem/AddRemove';

const MainRoute = () => {
	return (
		<Routes>
			<Route index path='/' element={<Home />} />
			<Route path='withprops' element={<WithProps />} />
			<Route path='context' element={<WithContext />} />
			<Route path='redux' element={<WithReduxCounter />} />
			<Route path='add/remove' element={<AddRemove />} />
		</Routes>
	);
};

export default MainRoute;
