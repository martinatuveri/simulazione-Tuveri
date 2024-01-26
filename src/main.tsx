import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ErrorPage from "./error-page";
import { ChakraProvider } from '@chakra-ui/react';
import Root from './routes/root';
import Movies, {loader as moviesLoader} from './routes/movies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{
      index: true,
      element: <Movies />,
      loader: moviesLoader,
    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>    
  </React.StrictMode>,
  
)
