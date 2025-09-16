import { Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import Error404 from "./Error404.jsx";
import ActivitiesPage from "../src/activities/ActivitiesPage.jsx";
import ActivityDetails from "./activities/ActivityDetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ActivitiesPage />} />
        <Route path="activities/:id" element={<ActivityDetails />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}