import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import GenresPage from "./pages/GenresPage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./ui/PageNotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import GenreIdPage from "./pages/GenreIdPage";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 1000 * 60, // 1 minute
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoutes>
                <AppLayout />
              </ProtectedRoutes>
            }
          >
            <Route
              path="admin-route"
              element={
                <AdminProtectedRoute>
                  <AdminRoute />
                </AdminProtectedRoute>
              }
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="genres" element={<GenresPage />} />
            <Route path="genres/:genreId" element={<GenreIdPage />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
