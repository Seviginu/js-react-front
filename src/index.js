import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginForm from './components/LoginForm';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="main" element={<MainPage />} />
      <Route path="" element={<StartPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
