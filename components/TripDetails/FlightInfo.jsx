import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function FlightInfo({ flightData }) {
  return (
    <View
      style={{
        marginTop: 20,
        borderRadius: 15,
        padding: 10,
        borderColor: Colors.LIGHT_GREY,
        borderWidth: 1,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          ✈️ Flights
        </Text>
        <TouchableOpacity
          style={{
            width: 100,
            padding: 5,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 7,
            marginTop: 7,
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "outfit",
              fontSize: 15,
              textAlign: "center",
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 17,
        }}
      >
        Airline: {flightData?.airline}
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 17,
        }}
      >
        Price: {flightData?.price}
      </Text>
    </View>
  );
}
