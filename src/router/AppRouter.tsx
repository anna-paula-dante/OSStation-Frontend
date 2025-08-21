import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "@/layout/Layout";
import SignIn from "@/pages/SignIn/SignIn";
import Profile from "@/pages/Profile/Profile";
import Home from "@/pages/Home/home";
import FileUpload from "@/pages/FilleUpload/FileUpload";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="update" element={<FileUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
