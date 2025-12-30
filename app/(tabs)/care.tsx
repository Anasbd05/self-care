import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import tw from "twrnc";

interface cardType {
  id: number;
  time: number;
  title: string;
}

export default function care() {
  const cards = [
    {
      id: 1,
      title: "Emotional Balance",
      time: 15,
    },
    {
      id: 2,
      title: "Calm Relaxation",
      time: 12,
    },
  ];
  const Playcards = [
    {
      id: 1,
      title: "Morning Gratitude",
      time: 5,
      label: "Morning",
    },
    {
      id: 2,
      title: "Serenity Before Sleep ",
      time: 10,
      label: "Evening",
    },
    {
      id: 3,
      title: "Calm Relaxation",
      time: 15,
      label: "Night",
    },
  ];

  return (
    <SafeAreaView style={tw`bg-gray-200 flex-1`}>
      <View style={tw`my-10`}>
        <View style={tw` mx-5`}>
          {/* header */}
          <View style={tw` flex flex-row justify-between items-center`}>
            <Text style={tw`text-3xl font-bold`}>Hello, Anas 👋</Text>
            <TouchableOpacity
              style={tw`bg-black relative w-12 h-12 flex items-center justify-center rounded-full`}
            >
              <MaterialIcons
                name="notifications-none"
                style={tw`-rotate-25`}
                size={26}
                color="white"
              />
              <View
                style={tw`bg-green-300 h-1.5 w-1.5 right-3 top-2.5 absolute rounded-full`}
              />
            </TouchableOpacity>
          </View>
          {/* search bar */}
          <View
            style={tw`mt-8 mb-4 flex flex-row items-center gap-1 bg-white rounded-full shadow-sm py-1.5 px-4 w-full  `}
          >
            <MaterialIcons name="search" size={26} color="gray" />
            <TextInput
              placeholder="Search..."
              style={tw`w-full pr-8 text-lg `}
            />
          </View>
          {/* Cards */}
          <View
            style={tw`flex flex-row  items-center gap-6 justify-between mr-5 `}
          >
            {cards.map((card: cardType) => (
              <View
                key={card.id}
                style={tw`w-2/4 bg-white flex flex-col items-center  p-5 rounded-2xl ${
                  card.id === 1 ? "bg-black" : "bg-white"
                } `}
              >
                <Text
                  style={tw` text-black text-2xl font-semibold ${
                    card.id === 1 ? "text-white" : "text-black"
                  } `}
                >
                  {card.title}
                </Text>
                <View
                  style={tw`mt-12 flex-row w-32 items-center  justify-between  rounded-full 
                  ${card.id === 1 ? "bg-neutral-800" : "bg-gray-200"}
                  `}
                >
                  <Text
                    style={tw`mx-4  font-medium ${
                      card.id === 1 ? " text-gray-300" : "text-gray-700"
                    } `}
                  >
                    {card.time} min
                  </Text>
                  <TouchableOpacity
                    style={tw`h-10 w-10 bg-sky-300 rounded-full flex items-center justify-center `}
                  >
                    <FontAwesome6 name="play" size={18} color={"black"} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* more cards */}
        <ScrollView style={tw`mt-8 rounded-t-2xl py-4 px-5 bg-white `}>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-2xl text-neutral-800 font-semibold `}>
              Special for you
            </Text>
            <TouchableOpacity style={tw`flex-row gap-2 items-center`}>
              <Text style={tw`text-gray-600 `}>See all</Text>
              <AntDesign
                name="right"
                size={12}
                color="black"
                style={tw` bg-gray-200 p-1 font-bold rounded-full`}
              />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-col gap-4 mt-6 `}>
            {Playcards.map((play) => (
              <View
                key={play.id}
                style={tw`rounded-[25px]  shadow-sm  px-4 py-5
                  ${
                    play.id === 1
                      ? "bg-sky-200"
                      : " bg-white border-[0.5px] border-gray-300"
                  } 
                  `}
              >
                <Text style={tw`text-xl font-semibold`}>{play.title}</Text>
                <View style={tw`flex-row justify-between mt-4 items-center`}>
                  <View style={tw`flex-row gap-3 `}>
                    <Text
                      style={tw` rounded-full py-1.5 px-4
                       ${play.id === 1 ? "bg-white" : "bg-sky-200"} 
                      `}
                    >
                      {play.time} min
                    </Text>
                    <Text
                      style={tw` rounded-full py-1.5 px-4
                       ${play.id !== 1 ? "bg-gray-100" : "bg-green-200"} 
                      `}
                    >
                      {play.label}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={tw`h-10 w-10 rounded-full flex items-center justify-center
                      ${play.id === 1 ? "bg-white" : "bg-sky-200 "} 
                      `}
                  >
                    <FontAwesome6 name="play" size={18} color={"black"} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
