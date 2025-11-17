import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./context/AppContext";
import Navbar from "./components/NavBar.jsx";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}


