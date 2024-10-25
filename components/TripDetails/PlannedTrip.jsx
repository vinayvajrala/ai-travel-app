import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { v4 as uuidv4 } from "uuid";

export default function PlannedTrip({ planDetails }) {
  const sortedPlanDetails = planDetails.sort((a, b) => a.day - b.day);
  const groupedPlanDetails = {};

  sortedPlanDetails.forEach((item, index) => {
    if (item.day in groupedPlanDetails) {
      groupedPlanDetails[item.day].push(item);
    } else {
      groupedPlanDetails[item.day] = [item];
    }
  });

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
      >
        🧳 Your Itinery
      </Text>

      {Object.entries(groupedPlanDetails).map(([day, places]) => {
        return (
          <View key={uuidv4()}>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 25,
                color: Colors.PRIMARY,
                marginBottom: 10,
                marginTop: 20,
              }}
            >
              Day- {day}
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: 20,
              }}
            >
              {places?.map((item, index) => {
                // console.log(item.places[0].place_name, "item in places map");
                return (
                  <View
                    key={uuidv4()}
                    style={{
                      backgroundColor: "#21b39d20",
                      borderRadius: 15,
                      width: 250,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                    }}
                  >
                    <View>
                      <Image
                        style={{
                          height: 120,
                          width: 250,
                          borderRadius: 15,
                        }}
                        resizeMode="cover"
                        // source={{ uri: item.places[0].place_image_url }}
                        source={require("../../assets/images/placeholder.jpeg")}
                      />
                    </View>
                    <View
                      style={{
                        padding: 10,
                        display: "felx",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 250,
                      }}
                    >
                      <View
                        style={{
                          width: "80%",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 17,
                            fontFamily: "outfit-bold",
                            color: Colors.PRIMARY,
                          }}
                        >
                          {item?.places[0]?.place_name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontFamily: "outfit",
                          }}
                        >
                          🎟️ Ticket Price:{" "}
                          <Text
                            style={{
                              fontSize: 15,
                              fontFamily: "outfit-bold",
                              color: Colors.PRIMARY,
                            }}
                          >
                            {item?.places[0]?.ticket_pricing}
                          </Text>
                        </Text>
                        <Text>
                          ⏱️:{" "}
                          <Text
                            style={{
                              fontSize: 15,
                              fontFamily: "outfit-bold",
                              color: Colors.PRIMARY,
                            }}
                          >
                            {item?.places[0]?.time_to_travel}
                          </Text>
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "20%",
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            backgroundColor: "#219e8b",
                            padding: 10,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Ionicons name="navigate" size={24} color="white" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View
                      style={{
                        padding: 10,
                        paddingTop: 0,
                      }}
                    >
                      <Text
                        style={{
                          color: Colors.GREY,
                          fontFamily: "outfit",
                          fontSize: 14,
                        }}
                      >
                        {item?.places[0]?.place_details}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
}
