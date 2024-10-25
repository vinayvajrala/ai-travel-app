import { View, Text, ScrollView } from "react-native";
import React from "react";
import moment from "moment/moment";
import { Colors } from "../../constants/Colors";
import { Image } from "react-native";

export default function UserTripCard({ trip }) {
  const ParsedTripData = JSON.parse(trip.tripData);

  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        // alignItems: "center",
      }}
    >
      <View
        style={
          {
            // marginTop: 20,
          }
        }
      >
        {/* <Image
          style={{
            width: 75,
            height: 75,
            objectFit: "cover",
            borderRadius: 15,
          }}
          source={require("../../assets/images/placeholder.jpeg")}
        /> */}
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              ParsedTripData?.locationInfo?.photoRef +
              "&key=" +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          style={{
            width: 100,
            height: 100,
            objectFit: "cover",
            borderRadius: 15,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          {ParsedTripData?.locationInfo?.name}
        </Text>
        <Text>{moment(ParsedTripData.startDate).format("DD MMM YYYY")}</Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 14,
            color: Colors.GREY,
          }}
        >
          Travelling: {ParsedTripData?.traveller?.title}
        </Text>
      </View>
    </View>
  );
}
