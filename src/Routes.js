import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Artical,
  Home,
  Login,
  ContactUs,
  PracticeAreas,
  AddPhoneNum,
  AddAccount, ResetPassword, ResetPasswordSecond, SignUp, CompanySignUp,
  PhoneVerification
} from "./components";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/company-sign-up" element={<CompanySignUp />} />
        <Route path="/artical" element={<Artical />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/add-account" element={<AddAccount />} />
        <Route path="/add-phone-num" element={<AddPhoneNum />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-second" element={<ResetPasswordSecond />} />
        <Route path="/phone-verification" element={<PhoneVerification />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
