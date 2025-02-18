import React, { useState, useRef, useEffect } from "react";

const PriceRangeSlider = () => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(80);
  const minRange = 0;
  const maxRange = 100;

  const rangeRef = useRef(null);

  useEffect(() => {
    updateTrack();
  }, [minValue, maxValue]);

  // Update range track dynamically
  const updateTrack = () => {
    if (rangeRef.current) {
      const minPercent = (minValue / maxRange) * 100;
      const maxPercent = (maxValue / maxRange) * 100;
      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.right = `${100 - maxPercent}%`;
    }
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 5);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 5);
    setMaxValue(value);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold text-center mb-4">Price Range</h2>

      {/* Slider Container */}
      <div className="relative w-full h-16 flex items-center">
        {/* Track Line */}
        <div className="absolute w-full h-2 bg-gray-300 rounded-full"></div>

        {/* Selected Range */}
        <div
          ref={rangeRef}
          className="absolute h-2 bg-blue-500 rounded-full transition-all"
        ></div>

        {/* Min Handle */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-2 opacity-0 cursor-pointer"
        />
        <div
          className="absolute w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-md cursor-pointer"
          style={{ left: `${(minValue / maxRange) * 100}%`, transform: "translate(-50%, -50%)" }}
        ></div>

        {/* Max Handle */}
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-2 opacity-0 cursor-pointer"
        />
        <div
          className="absolute w-6 h-6  bg-white border-4 border-blue-500 rounded-full shadow-md cursor-pointer"
          style={{ left: `${(maxValue / maxRange) * 100}%`, transform: "translate(-50%, -50%)" }}
        ></div>
      </div>

      {/* Price Display */}
      <div className="flex justify-between text-sm font-semibold mt-4">
        <span className="px-4 py-2 bg-gray-100 rounded-md">Min: ${minValue}</span>
        <span className="px-4 py-2 bg-gray-100 rounded-md">Max: ${maxValue}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
