import App from "@/App";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/Login";
import { ThemeProvider } from "@/provider/themeProvider";
import { Route, Routes } from "react-router";

function AppRoutes() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default AppRoutes;
