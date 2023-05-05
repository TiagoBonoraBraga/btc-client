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
import TableSales from '../components/molecules/sales/TableSales';
import TableUser from '../components/organisms/userClients/UserClients';
import Product from '../components/organisms/products/SalesProducts';

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
            { path: '/admin/franchised', element: <Client /> },
            { path: '/admin/support', element: <Support /> },
            { path: '/user', element: <User /> },
            { path: '/user/product', element: <Product /> },
            { path: '/user/client', element: <TableUser /> },
            { path: '/user/support', element: <Support /> },
            
            

        ],
    },
]);

export default Routes;