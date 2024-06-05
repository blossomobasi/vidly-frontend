import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MoviesPage from "./pages/MoviesPage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./ui/PageNotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import MovieIdPage from "./pages/MovieIdPage";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./admin-components/AdminLayout";
import AdminRoute from "./components/AdminRoute";
// import AdminGenre from "./admin-components/AdminGenre";
import AdminGenre from "./pages/admin/AdminGenre";
import AdminMovie from "./admin-components/AdminMovie";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 1000 * 60, // 1 minute
        retry: 1,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            path="admin-dashboard"
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<AdminRoute />} />
            <Route path="genres" element={<AdminGenre />} />
            <Route path="movies" element={<AdminMovie />} />
          </Route>

          <Route
            element={
              <ProtectedRoutes>
                <AppLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieIdPage />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
