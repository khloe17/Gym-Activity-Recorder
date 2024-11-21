import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Circle } from "react-native-svg";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(15); // Default selected date
  const [trainingType, setTrainingType] = useState("");
  const [intensity, setIntensity] = useState(50); // Default intensity
  // const[time,setTime]=useState("")
  const dates = [10, 11, 12, 13, 14, 15, 16]; // Week dates
  const[diary,setDiary]=useState("")




  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#9D9AD9" barStyle="light-content" />
      {/* Header Wrapper with Rounded Bottom */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Ionicons name="stats-chart-outline" size={24} color="white" />
          <Ionicons name="settings-outline" size={24} color="white" />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Month and Icons Row */}
      <View style={styles.monthContainer}>
        <Ionicons name="calendar-outline" size={24} color="black" />
        <Text style={styles.monthText}>Nov</Text>
        <Ionicons name="checkmark-circle-outline" size={24} color="black" />
      </View>
        {/* Date Selector */}
        <ScrollView
          horizontal
          contentContainerStyle={styles.dateContainer}
          showsHorizontalScrollIndicator={false}
        >
          {dates.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.dateBox, date === selectedDate && styles.selectedDate]}
              onPress={() => setSelectedDate(date)}
            >
              <Text
                style={[
                  styles.dateText,
                  date === selectedDate && styles.selectedDateText,
                ]}
              >
                {date}
              </Text>
            </TouchableOpacity>
          ))}
            {/* Horizontal Divider */}
            
        </ScrollView>

        <View style={styles.divider} />
        
        {/* Remaining content */}
        <Text style={styles.sectionTitle}>Type of Training</Text>
        <View style={styles.trainingTypeContainer}>
          {["Strength", "Cardio", "Flexibility", "Other/Custom"].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.trainingType,
                trainingType === type && styles.selectedTrainingType,
              ]}
              onPress={() => setTrainingType(type)}
            >
              <Text style={styles.trainingTypeText}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* <Text style={styles.sectionTitle}>Time of Workout</Text>
        <View style={styles.circularTimer}>
          <Svg height="100" width="100">
            <Circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="5" fill="none" />
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="#6c63ff"
              strokeWidth="5"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset="141"
            />
          </Svg>
          <Text style={styles.timerText}>00:15</Text>
        </View> */}
         <View style={styles.timeOfWorkout}>
         <Text style={styles.sectionTitle}>Time of Workout</Text>
        <View style={styles.circularTimer}>
          <Svg height="100" width="100">
            <Circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="5" fill="none" />
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="#6c63ff"
              strokeWidth="5"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset="141"
            />
          </Svg>
          <Text style={styles.timerText}>00:15</Text>
          <Ionicons
            name="checkmark-circle"
            size={24}
            color="#6c63ff"
            style={styles.checkmark}
          />
        </View>
      </View>
        <Text style={styles.sectionTitle}>Intensity Level</Text>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={intensity}
          onValueChange={(value) => setIntensity(value)}
          
          minimumTrackTintColor="#6c63ff"
          maximumTrackTintColor="#ddd"
          thumbTintColor="#6c63ff"
        />
        <Text style={styles.intensityText}>Intensity: {intensity}</Text>
        <Text style={styles.sectionTitle}>Workout Diary</Text>
        <TextInput
          style={styles.diaryInput}
          placeholder="Write your workout notes..."
          multiline
        />
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#9D9AD9", // Background for SafeArea (status bar area)
  },
  headerWrapper: {
    backgroundColor: "#9D9AD9", // Header background color
    borderBottomLeftRadius: 20, // Rounded bottom corners
    borderBottomRightRadius: 20, // Rounded bottom corners
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff", // Content background color
    padding: 20,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal:10
  },
  dateBox: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    // backgroundColor: "#ddd",
    marginHorizontal: 5,
  },
  selectedDate: {
    backgroundColor: "#6c63ff",
  },
  dateText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    fontWeight:'bold'
  },
  selectedDateText: {
    color: "#fff",
    fontWeight:'bold'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  trainingTypeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  trainingType: {
    width:"48%",
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#9D9AD9",
    marginBottom: 10,
    flexGrow: 0,
    alignItems: "center",
    
  },
  selectedTrainingType: {
    backgroundColor: "#6c63ff",
  },
  trainingTypeText: {
    fontSize: 14,
    color: "#FFF",
  },
  timeOfWorkout: {
    alignItems: "center",
    marginBottom: 20,
  },
  circularTimer: {
    // alignItems: "center",
    // justifyContent: "center",
    // marginBottom: 20,

    position: "relative", // Allows positioning of the checkmark and timer
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  timerText: {
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold",
    color: "#6c63ff",
    textAlign: "center",

  },
  checkmark: {
    position: "absolute",
    bottom: 15, // Adjusts the position to overlap with the circular progress
    right: 15,
  },
  intensityText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  diaryInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#fff",
    height: 120,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  monthContainer: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Center vertically
    justifyContent: "space-between", // Space out the elements
    marginBottom: 7, // Add spacing between month and dates
    paddingHorizontal: 10, // Add padding for alignment
  },
  monthText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black", // Adjust color as needed
    // marginHorizontal: 5, // Spacing between icons and text
  },
  divider: {
    height: 2, // Height of the line
    backgroundColor: "#ddd", // Color of the line
    marginVertical: 10, // Spacing above and below the line
    width: "100%", // Ensure it spans the full width
   
  },
});


