import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CountriesPage from './pages/CountriesPage';
import CountryDetailPage from './pages/CountryDetailPage';
import RedirectHome from './pages/RedirectHome';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: '/', element: <CountriesPage /> },
  { path: '/:countryName', element: <CountryDetailPage /> },
  { path: '*', element: <RedirectHome /> }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
