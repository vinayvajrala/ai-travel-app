import { View, Text, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import { TouchableOpacity } from "react-native";
import moment from "moment/moment";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);

  const onDateChange = (date, type) => {
    if (type == "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const onDateSelectionContinue = () => {
    if (!startDate && endDate) {
      ToastAndroid.show(
        "Please select Start and End Date",
        ToastAndroid.BOTTOM
      );
    }
    const totalNoOfDays = endDate.diff(startDate, "days");
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays + 1,
    });
    router.push("/create-trip/select-budget");
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
          marginTop: 20,
          fontFamily: "outfit-bold",
        }}
      >
        Travel Dates
      </Text>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={onDateSelectionContinue}
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
