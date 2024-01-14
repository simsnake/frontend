import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Editor from "./routes/Editor";
import Load from "./routes/Load";
import Save from "./routes/Save";
import Themes from "./routes/Themes"

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "text-editor",
        element: <Editor />,
      },
      {
        path: "load",
        element: <Load />,
      },
      {
        path: "save",
        element: <Save />,
      },
      {
        path: "themes",
        element: <Themes />,
      }
    ]
  }
])
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
