import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Persons from "./pages/Persons.jsx";
import "./index.css";
import MoviesCasts from "./pages/MoviesCasts.jsx";
import Reviews from "./pages/Reviews.jsx";
import Videos from "./pages/Videos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/404",
    // element: <button className='bg-blue-700 text-white rounded h-10 px-6'>AAA</button>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/details/:id",
    element: <Details></Details>,
  },
  {
    path: "/persons/:id",
    element: <Persons></Persons>,
  },
  {
    path:"/movies/:id/cast",
    element: <MoviesCasts></MoviesCasts>
  },
  {
    path: "/movies/:id/reviews",
    element: <Reviews></Reviews>
  },
  {
    path: "/movies/:id/videos",
    element: <Videos></Videos>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
