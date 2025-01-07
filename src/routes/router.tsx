import App from "@/App";
import AuthLayout from "@/layouts/AuthLayout";
import HomeLayout from "@/layouts/HomeLayout";
import Login from "@/pages/Login";
import Task from "@/pages/Tasks";
import User from "@/pages/User";
import { ThemeProvider } from "@/provider/themeProvider";
import { Route, Routes } from "react-router";

function AppRoutes() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<App />} />
          <Route path="/task" element={<Task />} />
          <Route path="/user" element={<User />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default AppRoutes;
