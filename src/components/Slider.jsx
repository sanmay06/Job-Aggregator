import React, { useState, useEffect } from "react";
import { Slider, Box, Typography } from "@mui/material";

const PriceSlider = (props) => {
  const [priceRange, setPriceRange] = useState([0, 500]); // Default range

    useEffect(() => {
      props.max(priceRange[1]);
      props.min(priceRange[0]);
    }, [priceRange]);

  // Handle slider change
  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Box sx={{ width: 300, margin: "0 auto" }}>
      <Typography variant="h6" gutterBottom>
        Salary Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={100000}
        step={100} 
      />
      <Typography variant="body1">
        Selected Range: ₹{priceRange[0]} - ₹{priceRange[1]} / month
      </Typography>
    </Box>
  );
};

export default PriceSlider;