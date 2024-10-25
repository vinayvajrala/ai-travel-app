import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function OptionCard({ option, selectedOption }) {
  return (
    <View
      style={[
        {
          padding: 25,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: Colors.LIGHT_GREY,
          borderRadius: 15,
          width: "100%",
        },
        selectedOption?.id === option?.id && { borderWidth: 3 },
      ]}
    >
      <View
        style={{
          width: "80%",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          {option?.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "outfit",
            color: Colors.GREY,
            width: "90%",
          }}
        >
          {option?.desc}
        </Text>
      </View>
      <View
        style={{
          width: "20%",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontFamily: "outfit",
            color: Colors.GREY,
          }}
        >
          {option?.icon}
        </Text>
      </View>
    </View>
  );
}
