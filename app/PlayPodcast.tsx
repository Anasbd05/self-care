import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Waveform from "../components/waveform";
export default function PlayPodcast() {
  const played: any = useLocalSearchParams();

  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white `}>
      <View style={tw`flex-1 `}>
        <Image
          source={played.image}
          style={{
            height: "60%",
            resizeMode: "cover",
            width: "100%",
            marginTop: -40,
          }}
        />
        <View style={tw`flex-row w-full justify-between top-5 absolute px-5`}>
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.8}
            style={tw`p-2 bg-white rounded-full `}
          >
            <AntDesign name="left" size={18} color="black" />
          </TouchableOpacity>
          <View style={tw`flex-row gap-3`}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={tw`p-2 bg-white rounded-full `}
            >
              <Feather name="download-cloud" size={18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={tw`p-2 bg-white rounded-full `}
            >
              <FontAwesome name="share-square-o" size={18} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`bg-white rounded-t-3xl p-5 -mt-6`}>
          {/* Played podcast */}
          <View>
            <Text style={tw`text-2xl font-semibold w-3/4 `}>
              {played.title}
            </Text>
            <Text style={tw`text-base text-gray-500 mt-1.5`}>
              {played.author}
            </Text>
          </View>
          {/* played chart  */}
          <View style={tw`  `}>
            <Waveform progress={0.32} />
            <View style={tw`flex-row justify-between mt-2 w-full`}>
              <Text style={tw`text-[#169af9ff] text-lg font-semibold`}>
                1.04
              </Text>
              <Text style={tw`text-gray-400 text-lg`}>3.29</Text>
            </View>
          </View>
          {/* played Buttons  */}
          <View style={tw`flex-row mt-10 items-center justify-around `}>
            <MaterialIcons name="shuffle" size={22} color="#777" />
            <MaterialIcons name="replay-10" size={34} color="#555" />
            <TouchableOpacity
              activeOpacity={0.6}
              style={tw`bg-black h-14 w-14 flex-row items-center justify-center rounded-full`}
            >
              <MaterialIcons name="play-arrow" size={34} color="white" />
            </TouchableOpacity>
            <MaterialIcons name="forward-10" size={34} color="#555" />
            <MaterialIcons name="favorite-border" size={22} color="#777" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
