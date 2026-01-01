import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Hosts, RecentlyPlayed } from "../../assets/assets";
import PodcastsSlider from "../../components/PodcastsSlider";

export default function play() {
  return (
    <SafeAreaView style={tw`bg-sky-300`}>
      {/* header */}
      <View style={tw`flex-row p-5 rounded-t-2xl justify-between items-start`}>
        <View style={tw`flex-col gap-1 `}>
          <Text style={tw`text-3xl font-bold`}>Hey Anas! 👋</Text>
          <Text style={tw`text-gray-700 font-medium`}>
            Listen to your favorite podcast
          </Text>
        </View>
        <View style={tw`flex-row gap-2`}>
          <TouchableOpacity style={tw`bg-white rounded-full p-2`}>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-white rounded-full p-2`}>
            <Octicons name="apps" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* the whole page with white bg */}
      <ScrollView
        style={tw`py-6 px-5 bg-white rounded-t-[26px]`}
        contentContainerStyle={tw`pb-24`}
        showsVerticalScrollIndicator={false}
      >
        {/* Image slider */}
        <Text style={tw`text-xl font-bold`}>Trending podcast</Text>
        <PodcastsSlider />
        {/* played podcasts with recommended hosts   */}
        <View style={tw`-mt-18`}>
          <Text style={tw`text-xl font-bold `}>Recently played</Text>
          <View style={tw`flex-col gap-6 mt-4`}>
            {RecentlyPlayed.map((played) => (
              <View style={tw`flex-row justify-between`} key={played.time}>
                <View style={tw`flex-row gap-3.5`}>
                  <Image
                    source={played.image}
                    style={{ height: 66, width: 66, borderRadius: 12 }}
                  />
                  <View>
                    <Text
                      style={tw`text-base leading-tight font-semibold w-3/4`}
                    >
                      {played.title}
                    </Text>
                    <View style={tw`flex-row gap-1 items-center mt-1`}>
                      <FontAwesome6 name="clock" size={13} color={"#888"} />
                      <Text style={tw` text-[#888] text-[13px] `}>
                        {played.time} mins remaining
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={tw`h-10 w-10 bg-sky-300 rounded-full flex items-center justify-center `}
                >
                  <FontAwesome6 name="play" size={18} color={"black"} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View>
            <View style={tw`flex-row justify-between mt-5`}>
              <Text style={tw`text-xl font-bold `}>Recommended host</Text>
              <Text style={tw`text-[#777]`}>See all</Text>
            </View>
            <View style={tw`flex flex-row mt-4 gap-6 pr-5`}>
              {Hosts.map((host) => (
                <View key={host.id} style={tw`w-2/4 h-[160px] `}>
                  <Image
                    source={host.image}
                    style={{
                      height: "100%",
                      width: "100%",
                      resizeMode: "cover",
                      borderRadius: 16,
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
