import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Image } from "react-native";
import { Colors } from "../../constants/Colors";
import moment from "moment/moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();

  const [tripDetails, setTripDetails] = useState({});

  const formatData = (data) => {
    try {
      // Check if data is a string, if so, parse it; otherwise, return as is
      return typeof data === "string" ? JSON.parse(data) : data;
    } catch (error) {
      console.error("Error parsing trip data:", error);
      return null;
    }
  };

  useEffect(() => {
    if (trip) {
      const parsedTrip = formatData(trip);
      setTripDetails(parsedTrip);
    }
    navigation.setOptions({
      headerTitle: "",
      headerShown: true,
      headerTransparent: true,
    });
  }, [trip]);

  const formattedDayPlan =
    typeof tripDetails?.tripPlan?.day_plan === "string"
      ? formatData(tripDetails?.tripPlan?.day_plan)
      : tripDetails?.tripPlan?.day_plan;
  // console.log(tripDetails, "tripDetails");
  return (
    Object.keys(tripDetails).length !== 0 && (
      <ScrollView
        style={{
          height: "100%",
          // padding: 25,
          // paddingTop: 75,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 330,
          }}
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              formatData(tripDetails?.tripData)?.locationInfo?.photoRef +
              "&key=" +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          onError={(error) => console.log("Image Load Error:", error)}
        />
        <View
          style={{
            padding: 15,
            marginTop: -30,
            backgroundColor: Colors.WHITE,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            height: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "outfit-bold",
            }}
          >
            {formatData(tripDetails?.tripData)?.locationInfo?.name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GREY,
              }}
            >
              {moment(formatData(tripDetails?.tripData)?.startDate).format(
                "DD MMM YYYY"
              )}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GREY,
              }}
            >
              {moment(formatData(tripDetails?.tripData)?.endDate).format(
                "DD MMM YYYY"
              )}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 17,
              color: Colors.GREY,
            }}
          >
            🚌{formatData(tripDetails?.tripData)?.traveller.title}
          </Text>
          <FlightInfo flightData={tripDetails?.tripPlan?.flight_details} />
          <HotelList hotelData={tripDetails?.tripPlan?.hotel} />
          <PlannedTrip planDetails={tripDetails?.tripPlan?.day_plan} />
        </View>
      </ScrollView>
    )
  );
}
