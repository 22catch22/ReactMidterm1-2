import {useState} from "react";
import Bestsellers from "../Bestsellers";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
//import StarIcon from '@mui/icons-material/Star';

//I got this code from a site that offers free UI tools. I think it looks pretty good. 
 //this lets us set the score on a scale from 1-5
const [rating, setrating] = useState()
 const labels = {
  0.5: 'Pathetic',
  1: 'Godawful',
  1.5: 'Bleh',
  2: 'Poor+',
  2.5: 'Meh',
  3: 'Meh+',
  3.5: 'Okay',
  4: 'Okay+',
  4.5: 'Pretty Damn Good',
  5: 'Pretty Damn Good+',
};
//here's the function that does the actual work
function TextRating() {
  const value = 3.5;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        onChange = {(rating, newRating) =>{ setrating(newRating)}}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}




export default TextRating; 


