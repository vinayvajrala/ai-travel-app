import { View, Text, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { FlatList } from "react-native";
import {
  SelectBudgetOptions,
  SelectTravellerList,
} from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { TouchableOpacity } from "react-native";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectBudget() {
  const navigation = useNavigation();
  const router = useRouter();

  const [selectedBudget, setSelectedBudget] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    selectedBudget &&
      setTripData({ ...tripData, budget: selectedBudget?.title });
  }, [selectedBudget]);


  const onClickBudgetContinue = () => {
    if (!selectedBudget) {
      ToastAndroid.show("Please Select a budget type", ToastAndroid.BOTTOM);
      return;
    }
    router.push("/create-trip/review-trip");
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
          Budget
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontFamily: "outfit",
            marginTop: 20,
          }}
        >
          Choose spending habits for your trip
        </Text>
      </View>
      <View>
        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedBudget(item)}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard
                key={index}
                option={item}
                selectedOption={selectedBudget}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={onClickBudgetContinue}
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
