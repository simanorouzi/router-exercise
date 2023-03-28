import * as React from 'react';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/main';
import Home from './components/home';
import Events from './components/events';
import EventDetail from './components/eventDetail';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'events',
          element: <Events />,
        },
        {
          path: 'events/:eventId',
          element: <EventDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
