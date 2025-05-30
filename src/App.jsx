import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./AppLayout";
import Beranda from "./pages/Beranda";
import Explore from "./pages/Explore";
import Mentorship from "./pages/Mentorship";
import DetailCategory from "./pages/DetailCategory";
import { createContext, useState } from "react";

export const DataProvider = createContext(null);

const App = () => {
  // Logic Header
  const [getUlasan, setUlasan] = useState(null);

  return (
    <>
      <DataProvider.Provider value={{ getUlasan, setUlasan }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Beranda />} />
              <Route path="explore" element={<Explore />}>
                <Route path=":title" element={<DetailCategory />} />
              </Route>
              <Route path="mentorship" element={<Mentorship />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider.Provider>
    </>
  );
};

export default App;
