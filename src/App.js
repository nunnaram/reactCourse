import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Applayout = () => {
    return (
        <div className='app'>
            <Header />
             <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [
            {
                path:'/',
                element: <Body />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path:'/restaurants/:id',
                element: <RestaurantMenu />
            }
        ],
        errorElement:<Error />
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);