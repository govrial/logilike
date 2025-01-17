import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'styles/index.scss';
import { AppProvider } from './app/providers/app-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
