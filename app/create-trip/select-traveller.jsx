import { View, Text, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { FlatList } from "react-native";
import { SelectTravellerList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { TouchableOpacity } from "react-native";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectTraveller() {
  const navigation = useNavigation();
  const router = useRouter();

  const [selectedTraveller, setSelectedTraveller] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, traveller: selectedTraveller });
  }, [selectedTraveller]);


  const onClickTravellerContinue = () => {
    if (!selectedTraveller) {
      ToastAndroid.show("Please Select a Traveller Type", ToastAndroid.BOTTOM);
      return;
    }
    router.push("/create-trip/select-dates");
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
      <View>
        <Text
          style={{
            fontSize: 35,
            fontFamily: "outfit-bold",
            marginTop: 20,
          }}
        >
          Who's Travelling
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontFamily: "outfit",
            marginTop: 20,
          }}
        >
          Chose your travellers
        </Text>
      </View>
      <View>
        <FlatList
          data={SelectTravellerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveller(item)}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard
                key={index}
                option={item}
                selectedOption={selectedTraveller}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={onClickTravellerContinue}
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          borderRadius: 15,
          marginTop: 20,
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
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
