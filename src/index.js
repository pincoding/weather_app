import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  </React.StrictMode>
);
// git add .
// git commit -m ""
// git push origin main