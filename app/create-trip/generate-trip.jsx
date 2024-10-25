import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModel";
import { useRouter } from "expo-router";

import { auth, db } from "../../configs/FirebaseConfigs";
import { doc, setDoc } from "firebase/firestore";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  const user = auth.currentUser;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GenerateAiTrip();
  }, []);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripData?.locationInfo?.name
    )
      .replace("{totalDays}", tripData?.totalNoOfDays)
      .replace("{totalNights}", tripData?.totalNoOfDays - 1)
      .replace("{traveller}", tripData?.traveller?.title)
      .replace("{budget}", tripData?.budget)
      .replace("{totalDays}", tripData?.totalNoOfDays)
      .replace("{totalNights}", tripData?.totalNoOfDays - 1);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    const tripReponse = JSON.parse(result.response.text());
    setLoading(false);
    const docId = Date.now().toString();
    const result_ = await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripPlan: tripReponse, //AI result
      tripData: JSON.stringify(tripData),
      docId: docId, //user selection data
    });

    router.push("(tabs)/mytrip");
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          textAlign: "center",
          fontFamily: "outfit-bold",
        }}
      >
        Please Wait.....
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          fontFamily: "outfit-medium",
          //   color: Colors.GREY,
          marginTop: 30,
        }}
      >
        We are working to generate your dream trip
      </Text>
      <Image
        style={{
          width: "100%",
          height: 200,
          objectFit: "contain",
        }}
        source={require("../../assets/images/Rocket-Loading.gif")}
      ></Image>
      <Text
        style={{
          fontFamily: "outfit",
          color: Colors.GREY,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Do not go back
      </Text>
    </View>
  );
}
