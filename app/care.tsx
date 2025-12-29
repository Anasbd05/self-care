/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function login() {
  const router = useRouter();

  return (
    <View>
      <Text onPress={() => router.push("/Onboard")}>login</Text>
    </View>
  );
}
