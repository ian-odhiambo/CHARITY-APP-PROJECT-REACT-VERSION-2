import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import IndexPage from "./PAGES/IndexPage";
import MainLayOut from "./LAYOUT/MainLayOut";
import LoginPage from "./PAGES/LoginPage";
import DashboardPage from "./PAGES/DashboardPage";
import RegisterPage from "./PAGES/RegisterPage";
import UserPage from "./PAGES/UserPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<IndexPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/Dashboard" element={<DashboardPage />} />
      <Route path="/User" element={<UserPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
