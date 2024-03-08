import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App'
import Journal from './pages/Journal'
import Header from './components/Header'
import Footer from './components/Footer'
import Learn from './pages/Learn'
import Challenges from './pages/Challenges';
import Account from './pages/Account'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Journal",
    element: <><Header/><Journal/><Footer/></>,
  },
  {
    path:"Learn",
    element:<><Header/><Learn/><Footer/></>
  },
  {
    path:"Challenges",
    element:<><Header/><Challenges/><Footer/></>
  },
  {
    path:"Account",
    element:<><Header/><Account/><Footer/></>
  }

  
]);

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
