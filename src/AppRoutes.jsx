import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import ContactUs from "./pages/contactUs";
import Home from "./pages/home";
import Users from "./pages/users";
import UserDetails from "./pages/user-details";
import Settings from "./pages/settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
