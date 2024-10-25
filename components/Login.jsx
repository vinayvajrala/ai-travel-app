import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View
      style={{
        width: "100vw",
        maxWidth: "100vw",
      }}
    >
      <Image
        source={require("../assets/images/login.jpg")}
        style={{
          height: 500,
          width: "fit",
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            textAlign: "center",
            color: Colors.GREY,
            marginTop: 10,
          }}
        >
          Discoveryour next adventure effortlessly. Personalized suggestions at
          your figertips. Travel smarter with AI-driven insights.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 16,
              color: Colors.WHITE,
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    marginTop: -20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 25,
    height: "100%",
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "20%",
  },
});
