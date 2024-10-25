// const fetchPlaceDetails = async (query) => {
//   const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
//     query
//   )}&key=${EXPO_PUBLIC_GOOGLE_MAP_KEY}`;

//   try {
//     const response = await fetch(textSearchUrl);
//     const data = await response.json();

//     if (data.results && data.results.length > 0) {
//       // Get the first result's place_id
//       return data.results[0].place_id;
//     } else {
//       console.error("No results found for the query");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching place details:", error);
//     return null;
//   }
// };
