import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Animes from './pages/Animes.tsx';
import AddAnime from './pages/AddAnime.tsx';
import AnimeDetail from './pages/AnimeDetail.tsx';
import EditAnime from './pages/EditAnime.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "animes",
        element: <Animes />
      },
      {
        path: "add-anime",
        element: <AddAnime />
      },
      {
        path: "animes/:id",
        element: <AnimeDetail />
      },
      {
        path: "animes/:id/edit",
        element: <EditAnime />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
