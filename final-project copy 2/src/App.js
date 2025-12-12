import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GalleryPage from "./pages/GalleryPage";
import IntroPage from "./pages/IntroPage";
import AddArtPage from "./pages/AddArtPage";

import { setInitialArt } from "./store/slices/artSlice";

const App = () => {
  const dispatch = useDispatch();

  // FETCH ART DATA FROM JSON SERVER
  const fetchArtData = async () => {
    const response = await axios.get("http://localhost:3001/artData");
    dispatch(setInitialArt(response.data));
  };

  // RUN FETCH ON FIRST APP LOAD
  useEffect(() => {
    fetchArtData();
  }, []);

  return (
    <div className="min-h-screen bg-[#c9b8ac]">
      <Navbar />
      <main className="px-8 pt-8">
        <Routes>
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/add" element={<AddArtPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;