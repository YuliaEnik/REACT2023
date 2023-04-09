import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import "./layout.scss";

export const Layout: React.FC = () => (
  <>
    <header className="header">
      <Navbar />
    </header>
    <main className="main">
      <Outlet />
    </main>
  </>
);
