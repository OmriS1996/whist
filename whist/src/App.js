import "./App.css";
import NavbarComponent from "./components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Stats from "./pages/stats/stats";
import Admin from "./pages/admin/admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, createContext } from "react";

export const StoreContext = createContext();

function App() {
  const [storeArray, setStoreArray] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <StoreContext.Provider value={[storeArray, setStoreArray]}>
          <div>
            <NavbarComponent
              storeArray={storeArray}
              updateCart={setStoreArray}
            />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </StoreContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
