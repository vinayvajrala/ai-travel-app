// export const GetPhotoUrl = (photoReference) => {
//   const photoUrl = `'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`;
//   return photoUrl;
// };

// export const FetchPlacePhoto = async (photoReference) => {
//   try {
//     const proxyUrl = `http://localhost:3001/place-photo?photoReference=${photoReference}`;
//     setPhotoUrl(proxyUrl);
//     setLoading(false);
//   } catch (error) {
//     console.error("Error fetching place photo:", error);
//     setLoading(false);
//   }
// };
