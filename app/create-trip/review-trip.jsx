import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment/moment";
import { TouchableOpacity } from "react-native";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

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
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Review Your Trip
      </Text>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 19,
            fontFamily: "outfit-medium",
            color: Colors.GREY,
          }}
        >
          Before Generating the trip, please review your trip and confirm{" "}
        </Text>
        <View
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            📍
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GREY,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            📅
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GREY,
              }}
            >
              Travel Dates
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData?.endDate).format("DD MMM") +
                " "}
              ( {tripData?.totalNoOfDays} days)
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            🚌
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GREY,
              }}
            >
              Who is Travelling?
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.traveller?.title}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            💰
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GREY,
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.replace("/create-trip/generate-trip")}
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          borderRadius: 15,
          marginTop: 80,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontSize: 20,
            fontFamily: "outfit-medium",
          }}
        >
          Build My trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
