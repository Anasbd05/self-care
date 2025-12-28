/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import tw from "twrnc";

export default function index() {
  const router = useRouter();
  return (
    <View style={tw` flex-1 bg-white`}>
      <Onboarding
        onDone={() => router.push("/login")}
        containerStyles={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View
                style={tw`bg-[#4988C4] rounded-b-3xl h-[400px] w-full -mt-20 flex items-center justify-center `}
              >
                <Image
                  style={{ height: 240, width: 240 }}
                  source={require("../assets/images/face.png")}
                />
              </View>
            ),
            title: "Boost Productivity",
            subtitle: "Subscribe this channel to boost your productivity level",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View
                style={tw`bg-[#FF986A] rounded-b-3xl h-[400px] w-full -mt-20 flex items-center justify-center `}
              >
                <Image
                  style={{ height: 240, width: 240 }}
                  source={require("../assets/images/happiness.png")}
                />
              </View>
            ),

            title: "Work Seamlessly",
            subtitle: "Get your work done seamlessly without interruption ",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View
                style={tw`bg-[#FBE580] rounded-b-3xl h-[400px] w-full -mt-20 flex items-center justify-center `}
              >
                <Image
                  style={{ height: 240, width: 240 }}
                  source={require("../assets/images/happy.png")}
                />
              </View>
            ),

            title: "Achieve Higher Goals",
            subtitle:
              "By boosting your productivity we help you to achieve higher goals",
          },
        ]}
      />
    </View>
  );
}
