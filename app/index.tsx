import { Text, View } from "react-native";
import Login from "../components/Login";
import { auth } from "../configs/FirebaseConfigs";
import { Redirect } from "expo-router";
import "react-native-get-random-values";

export default function Index() {
  const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user ? <Redirect href={"/mytrip"} /> : <Login />}
    </View>
  );
}
