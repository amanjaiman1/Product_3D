import React, { useState, useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import state from "../CustomizerViewer/valito";
import Confetti from "react-confetti";
import Button from "../Button";

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
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${encodeURIComponent(
          prompt
        )}&order_by=random&client_id=H2I0Fl2cZb6elH8xa21OPA4Fol62z_Nz6kpIwEclHTo`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
        state.logoDecal = "./react.png";
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
  const handlePrevImage = () => {
    if (currentIndex < resultUrls.length - 1) {
      state.logoDecal = resultUrls[currentIndex - 1].urls.full; // Update logoDecal first
      setCurrentIndex(currentIndex - 1);
    } else {
      setPageNumber(pageNumber - 1);
      setCurrentIndex(0);
    }
  };

  const handleFullTexture = () => {
    state.isFullTexture = !state.isFullTexture;
    fullTextureRef.current = true;
    if (state.isFullTexture && currentIndex < resultUrls.length) {
      state.fullDecal = resultUrls[currentIndex].urls.full;
    } else {
      state.fullDecal = "./react.png";
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
    <div className="flex flex-col justify-center h-[300px]">
      <div className="flex items-center space-x-3">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-80 h-12 px-4 py-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border border-gray-300 text-gray-700 placeholder-gray-400 text-sm"
          placeholder="Search for images..."
        />
        <Button
          onClick={handleSubmit}
          className="h-12 w-50 rounded-full bg-primary text-white focus:outline-none focus:ring-2"
        >
          Fetch Image
        </Button>
      </div>
      {showConfetti && <Confetti />}

      <div className="flex mt-4 space-x-2">
        <Button
          onClick={handlePrevImage}
          className={"w-20 rounded-full bg-primary text-white"}
        >
          &#8592;
        </Button>
        <Button
          onClick={handleNextImage}
          className={"w-20 rounded-full bg-primary text-white"}
        >
          &#8594;
        </Button>
        <Button
          onClick={handleFullTexture}
          className="py-2 h-12 px-4 rounded-full mx-3 bg-primary text-white"
        >
          AI Full {state.isFullTexture ? "On" : "Off"}
        </Button>
      </div>
    </div>
  );
};

export default CustomizerLogo;
