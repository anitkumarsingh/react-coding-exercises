import { Route, Routes } from 'react-router-dom';
import WithProps from '../pages/Counter/WithProps/WithProps';
import Home from '../pages/Home';

const MainRoute = () => {
	return (
		<Routes>
			<Route index path='/' element={<Home />} />
			<Route path='withprops' element={<WithProps />} />
		</Routes>
	);
};

export default MainRoute;
