import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import LoginPage from "../pages/LoginPage";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import FavoritePage from "../pages/FavoritePage";
import MovieDetail from "../features/movies/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
