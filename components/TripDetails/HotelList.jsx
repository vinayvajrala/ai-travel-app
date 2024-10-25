import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
// import { FetchPlaceDetails } from "./fetchPlaceDetails";
// import { FetchHotelPhotos } from "./fetchHotelPhotos";
// import { GetPhotoUrl } from "./getPhotoUrl";

export default function HotelList({ hotelData }) {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hotelData && hotelData.length > 0) {
      const firstHotelPhotoReference = hotelData[0]?.photoReference;
      if (firstHotelPhotoReference) {
        fetchPlacePhoto(firstHotelPhotoReference);
      } else {
        console.error("No photo reference found for the first hotel");
        setLoading(false);
      }
    }
  }, [hotelData]);

  const fetchPlacePhoto = async (photoReference) => {
    try {
      const proxyUrl = `http://192.168.50.117:3001/place-photo?photoReference=${photoReference}`;
      setPhotoUrl(proxyUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching place photo:", error);
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
          marginBottom: 10,
        }}
      >
        🏨 Hotel Recommendations
      </Text>

      <FlatList
        style={{
          marginTop: 8,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={hotelData}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              marginRight: 10,
              width: 182,
              borderWidth: 1,
              borderColor: Colors.LIGHT_GREY,
              borderRadius: 15,
            }}
          >
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : photoUrl ? (
              <Image
                source={{ uri: photoUrl }}
                style={{ width: 200, height: 200 }}
                resizeMode="cover"
              />
            ) : (
              <Image
                style={{ height: 120, width: 180, borderRadius: 15 }}
                source={require("../../assets/images/placeholder.jpeg")}
              />
            )}
            <View
              style={{
                padding: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 17,
                }}
              >
                {item.hotel_name}
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontFamily: "outfit", fontSize: 15 }}>
                  ⭐{item?.rating}
                </Text>
                <Text style={{ fontFamily: "outfit", fontSize: 15 }}>
                  💰{item?.price}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
