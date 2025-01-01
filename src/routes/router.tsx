import App from "@/App";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/Login";
import { Route, Routes } from "react-router";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
