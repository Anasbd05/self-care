import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Moresettings } from "../../assets/assets";

export default function settings() {
  return (
    <SafeAreaView style={tw`bg-gray-100 flex-1`}>
      <View style={tw` mx-5 my-10`}>
        {/* User account details */}
        <View
          style={tw`flex-row items-center bg-white py-3 px-4 rounded-xl shadow-sm justify-between  `}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <Image
              style={{
                height: 54,
                width: 54,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#5A7ACD",
              }}
              source={require("../../assets/images/user.jpg")}
            />
            <View>
              <Text style={tw`text-xl font-bold`}>Anas Bd</Text>
              <Text style={tw`text-gray-700 -mt-0.5`}>
                anastrying05@gmail.com
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Subscription cancel */}
        <View style={tw`my-5 shadow-sm p-4 rounded-xl bg-white `}>
          <Text style={tw`text-xl font-bold`}>Subscription Management</Text>
          <Text style={tw`mt-1 text-neutral-800 `}>
            You can cancel your subscription at any time. when you cancel you
            will lose the access to the application untill you subscribe again.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw`bg-black rounded-2xl mt-4 w-full flex-row items-center  justify-center gap-4 py-3 `}
          >
            <Feather name="credit-card" size={18} color="white" />
            <Text style={tw`text-white font-medium text-lg `}>
              Cancel subscription
            </Text>
          </TouchableOpacity>
        </View>

        {/* more Settings  */}
        <View style={tw` bg-white py-2 rounded-xl `}>
          {Moresettings.map((setting, index) => (
            <View key={index} style={tw`py-2.5`}>
              <TouchableOpacity
                activeOpacity={0.4}
                style={tw`flex-row justify-between px-3 items-center `}
              >
                <View style={tw`flex-row gap-4 items-center`}>
                  <Pressable>{setting.icon}</Pressable>
                  <Text style={tw`font-medium text-neutral-900 `}>
                    {setting.label}
                  </Text>
                </View>
                <AntDesign name="right" size={22} color="#8b8b8bff" />
              </TouchableOpacity>
              {setting.id !== 5 ? (
                <View style={tw`h-[0.1] mt-4 bg-gray-400 w-full`} />
              ) : (
                ""
              )}
            </View>
          ))}
        </View>
        {/* Logout */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={tw` bg-red-500 flex-row gap-4 items-center justify-between   p-4 rounded-xl mt-4 `}
        >
          <View style={tw`flex-row gap-4 items-center`}>
            <MaterialIcons name="logout" size={22} color="white" />
            <Text style={tw`font-medium text-white `}>Logout</Text>
          </View>
          <AntDesign name="right" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
