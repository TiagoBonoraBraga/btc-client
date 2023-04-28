import { Outlet, createBrowserRouter } from 'react-router-dom';

import Admin from '../pages/AdminPages/Admin';
import Client from '../pages/AdminPages/Client';
import ErrorPage from '../pages/ErrorPage';
import Franchised from '../pages/AdminPages/Franchised';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/AdminPages/Products';
import Support from '../pages/Support';
import User from '../pages/UserPages/User';

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
            { path: '/admin/', element: <Admin /> },
            { path: '/admin/client', element: <Client /> },
            { path: '/admin/product', element: <Products /> },
            { path: '/admin/franchised', element: <Franchised /> },
            { path: '/admin/support', element: <Support /> },
            { path: '/user', element: <User /> },
            { path: '/user/support', element: <Support /> },
            
           

        ],
    },
]);

export default Routes;