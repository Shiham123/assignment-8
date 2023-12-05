import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../pages/layout/mainLayout';
import Home from '../pages/home/home';
import Donation from '../pages/donation/donation';
import Statistics from '../pages/Statistics/statistics';
import Error from '../pages/error/error';
import CardDetails from '../components/Card/cardDetails';

const createdRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home />, loader: () => fetch('/donation.json') },
      { path: '/donation', element: <Donation /> },
      { path: '/statistics', element: <Statistics /> },
      {
        path: '/card/:id',
        element: <CardDetails />,
        loader: () => fetch('/donation.json'),
      },
    ],
  },
]);

export default createdRouter;
