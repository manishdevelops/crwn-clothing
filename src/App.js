import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
	return <h2>This is a Shop</h2>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index={true} element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='sign-In' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
