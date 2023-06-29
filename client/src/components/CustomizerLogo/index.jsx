import React, { useState, useEffect, useRef } from "react";
import { useSnapshot } from 'valtio';
import state from '../CustomizerViewer/valito';
import Confetti from 'react-confetti';


const CustomizerLogo = () => {
  const [prompt, setPrompt] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resultUrls, setResultUrls] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [pageNumber, setPageNumber] = useState(1); // New state for page number
  const snap = useSnapshot(state);
  const fullTextureRef = useRef(null);

  const handleSubmit = async () => {
    if (!prompt) {
      alert("Please enter a prompt");
      return;
    }

    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?page=${pageNumber}&query=${encodeURIComponent(prompt)}&order_by=random&client_id=H2I0Fl2cZb6elH8xa21OPA4Fol62z_Nz6kpIwEclHTo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();
      console.log("Fetched Data:", data.results);

      if (data.results.length > 0) {
        setResultUrls(data.results);
        setCurrentIndex(0);
        state.isLogoTexture = true;
        state.logoDecal = data.results[0].urls.full;
        setShowConfetti(true);
      } else {
        setResultUrls([]);
        setCurrentIndex(0);
        state.isLogoTexture = false;
        state.logoDecal = "./logo.png";
        setShowConfetti(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNextImage = () => {
    if (currentIndex < resultUrls.length - 1) {
      state.logoDecal = resultUrls[currentIndex + 1].urls.full; // Update logoDecal first
      setCurrentIndex(currentIndex + 1);
    } else {
      setPageNumber(pageNumber + 1);
      setCurrentIndex(0);
    }
  };

  const handleFullTexture = () => {
    state.isFullTexture = !state.isFullTexture;
    fullTextureRef.current = true;
    if (state.isFullTexture && currentIndex < resultUrls.length) {
      state.fullDecal = resultUrls[currentIndex].urls.full;
    } else {
      state.fullDecal = "./logo.png";
    }
  };

  useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => {
        setShowConfetti(false);
      }, 8000);
      return () => clearTimeout(timeout);
    }
  }, [showConfetti]);

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-80 h-12 px-4 py-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border border-gray-300 text-gray-700 placeholder-gray-400 text-sm"
        placeholder="Search for images..."

      />
      <button
        onClick={handleSubmit}
        className="mt-4 py-2 px-4 rounded-lg bg-purple-500 hover:bg-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        Fetch Image
      </button>
      {showConfetti && <Confetti />}

      <div className="flex mt-4">
        <button
          onClick={handleNextImage}
          className="py-2 px-4 rounded-lg bg-purple-500 hover:bg-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <span  >&#8592;</span>
          <span className="mx-2"></span>
          <span>&#8594;</span>
        </button>
        <button
          onClick={handleFullTexture}
          className="py-2 px-4 rounded-lg mx-3 bg-purple-500 hover:bg-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          AI Full {state.isFullTexture ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
};

export default CustomizerLogo;
