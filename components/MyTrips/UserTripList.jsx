import { View, Text, Image, FlatList, ScrollView } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import moment from "moment/moment";
import { TouchableOpacity } from "react-native";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";

export default function UserTripList({ userTrips }) {
  const LatestTrip = JSON.parse(userTrips[0].tripData);
  const router = useRouter();

  return (
    userTrips && (
      <View
        style={{
          paddingBottom: 100,
        }}
      >
        <View
          style={{
            marginTop: 20,
          }}
        >
          {LatestTrip?.locationInfo?.photoRef ? (
            <Image
              source={{
                uri:
                  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                  LatestTrip.locationInfo?.photoRef +
                  "&key=" +
                  process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
              }}
              style={{
                width: "100%",
                height: 240,
                objectFit: "cover",
                borderRadius: 15,
              }}
            />
          ) : (
            <Image
              style={{
                width: "100%",
                height: 240,
                objectFit: "cover",
                borderRadius: 15,
              }}
              source={require("../../assets/images/placeholder.jpeg")}
            />
          )}
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              color: Colors.PRIMARY,
            }}
          >
            {LatestTrip.locationInfo.name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
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
              {moment(LatestTrip.startDate).format("DD MMM YYYY")}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GREY,
              }}
            >
              🚌{LatestTrip.traveller.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/trip-details",
                params: { trip: JSON.stringify(userTrips[0]) },
              })
            }
            style={{
              padding: 15,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 15,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                color: Colors.WHITE,
                textAlign: "center",
                fontSize: 15,
              }}
            >
              See your plans
            </Text>
          </TouchableOpacity>
        </View>
        {userTrips.map((trip, index) => {
          return <UserTripCard trip={trip} key={index} />;
        })}
      </View>
    )
  );
}
