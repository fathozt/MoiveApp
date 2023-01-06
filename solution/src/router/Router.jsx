import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import React from "react";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MoiveDetail from "../pages/MoiveDetail";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AppRouter() {
  const { currentUser } = useContext(AuthContext);

  function PrivateRouter() {
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:id" element={<PrivateRouter />}>
            <Route path="" element={<MoiveDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
