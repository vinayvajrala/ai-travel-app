import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { View, Text, TextInput, StyleSheet, ToastAndroid } from "react-native";
import { Colors } from "../../../constants/Colors";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "../../../configs/FirebaseConfigs";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const OnCreateAccount = () => {
    if (!email && !password && !fullName) {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        router.replace("/mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
        if ((errorCode = "auth/email-already-in-use")) {
          ToastAndroid.show("Email already in use", ToastAndroid.BOTTOM);
          return;
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop: 30,
        }}
      >
        Create New Account
      </Text>

      <View
        style={{
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Full Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          onChangeText={(value) => setFullName(value)}
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
        onPress={OnCreateAccount}
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
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("auth/sign-in")}
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
          Sign In
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
