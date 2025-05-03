import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import AppLayout from "./AppLayout";
import Beranda from "./pages/Beranda";
import Explore from "./pages/Explore";
import Mentorship from "./pages/Mentorship";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Beranda />} />
            <Route path="explore" element={<Explore />} />
            <Route path="mentorship" element={<Mentorship />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
