import { Outlet, createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../pages/errorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';

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

        ],
    },
]);

export default Routes;