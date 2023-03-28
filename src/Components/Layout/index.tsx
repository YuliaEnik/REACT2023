import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar";
import "./layout.scss";

const Layout: React.FC = () => (
  <>
    <header className="header">
      <Navbar />
    </header>
    <main className="main">
      <Outlet />
    </main>
  </>
);

export { Layout };
