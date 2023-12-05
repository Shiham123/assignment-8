import ReactDOM from 'react-dom/client';
import './main.css';
import { RouterProvider } from 'react-router-dom';
import createdRouter from './route/route.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={createdRouter}></RouterProvider>
);
