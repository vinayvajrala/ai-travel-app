import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();

  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 25,
        }}
      >
        No Trips planned yet
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 20,
          textAlign: "center",
          color: Colors.GREY,
        }}
      >
        Looks like its time to plan a new travel experience! Get Started below.
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/create-trip/search-place")}
        style={{
          padding: 10,
          backgroundColor: Colors.PRIMARY,
          paddingHorizontal: 30,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 17,
            color: Colors.WHITE,
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
