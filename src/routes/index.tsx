import { Outlet, createBrowserRouter } from 'react-router-dom';

import Admin from '../pages/Admin';
import Client from '../pages/Client';
import ErrorPage from '../pages/ErrorPage';
import Franchised from '../pages/Franchised';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';

const App = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/client', element: <Client /> },
            { path: '/products', element: <Products /> },
            { path: '/admin', element: <Admin /> },
            { path: '/franchised', element: <Franchised /> },
            

        ],
    },
]);

export default Routes;