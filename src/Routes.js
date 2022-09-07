import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Artical, Home, Login, ContactUs, PracticeAreas, AddAccount, ResetPassword, ResetPasswordSecond, SignUp } from "./components";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/artical" element={<Artical />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/add-account" element={<AddAccount />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-second" element={<ResetPasswordSecond />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
