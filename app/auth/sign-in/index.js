import { View, Text, TextInput, StyleSheet, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfigs";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = () => {
    if (!email && !password) {
      ToastAndroid.show("Please Enter Email& Password", ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.replace("/mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (errorCode == "auth/invalid-credential") {
          ToastAndroid.show("Invalid Credentials", ToastAndroid.BOTTOM);
          return;
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 40,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          marginTop: 30,
        }}
      >
        Let's Sign You in
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          color: Colors.GREY,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          color: Colors.GREY,
          marginTop: 10,
        }}
      >
        You've been missed
      </Text>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Email
        </Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
          placeholder="Enter Email"
        ></TextInput>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Password
        </Text>
        <TextInput
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={onSignIn}
        style={{
          padding: 20,
          borderRadius: 20,
          backgroundColor: Colors.PRIMARY,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontFamily: "outfit",
            fontSize: 16,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-up")}
        style={{
          padding: 20,
          borderRadius: 20,
          backgroundColor: Colors.WHITE,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            textAlign: "center",
            fontFamily: "outfit",
            fontSize: 16,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 15,
  },
});
