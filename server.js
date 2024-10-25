// export const FetchHotelPhotos = async (placeId) => {
//   const detailsUrl = `'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,photo&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`;

//   try {
//     const response = await fetch(detailsUrl);
//     const data = await response.json();

//     if (data.result && data.result.photos && data.result.photos.length > 0) {
//       // Return the first photo reference
//       return data.result.photos[0].photo_reference;
//     } else {
//       console.error("No photos found for the place");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching hotel photos:", error);
//     return null;
//   }
// };
// import express from "express";
// import axios from "axios";

const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3001;
const cors = require("cors");
app.use(cors());

app.get("/place-photo", async (req, res) => {
  const { photoReference } = req.query;
  // const GOOGLE_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
  const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`;

  try {
    const response = await axios.get(photoUrl, { responseType: "arraybuffer" });
    res.set("Content-Type", "image/jpeg");
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching photo");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
