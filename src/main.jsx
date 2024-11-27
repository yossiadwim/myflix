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
import MediaDetail from "./pages/MediaDetail.jsx";
import Collections from "./pages/Collections.jsx";
import Seasons from "./pages/Seasons.jsx";
import Movies from "./pages/Movies.jsx";
import Search from "./pages/Search.jsx";

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
    path: "/:state/:id",
    element: <Details></Details>,
  },
  {
    path: "/persons/:id",
    element: <Persons></Persons>,
  },
  {
    path: "/:state/:id/casts" ,
    element: <MoviesCasts></MoviesCasts>,
  },
  {
    path: "/:state/:id/reviews",
    element: <Reviews></Reviews>,
  },
  {
    path: "/:state/:id/:type",
    element: <MediaDetail></MediaDetail>,
  },
  {
    path: "collection/:id/",
    element: <Collections></Collections>,
  },
  {
    path: "/tv/:id/seasons",
    element: <Seasons></Seasons>
  },
  {
    path: "/movie/popular",
    element: <Movies></Movies>
  },
  {
    path: '/search',
    element: <Search></Search>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
