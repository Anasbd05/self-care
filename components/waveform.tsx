import React, { useMemo } from "react";
import { View } from "react-native";
import tw from "twrnc";

export default function Waveform({ bars = 60, progress = 0.35 }) {
  const heights = useMemo(
    () =>
      Array.from({ length: bars }, () => Math.floor(Math.random() * 20 + 6)),
    [bars]
  );

  return (
    <View style={tw`flex-row items-center justify-between h-16 mt-6`}>
      {heights.map((h, i) => {
        const isPlayed = i / bars < progress;
        const color = isPlayed ? "#169af9ff" : "#d1d5db";

        return (
          <View key={i} style={tw`items-center`}>
            {/* top */}
            <View
              style={{
                width: 3,
                height: h,
                backgroundColor: color,
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
              }}
            />
            <View
              style={{
                width: 3,
                height: h,
                marginTop: -1,
                backgroundColor: color,
                borderBottomLeftRadius: 2,
                borderBottomRightRadius: 2,
              }}
            />
          </View>
        );
      })}
    </View>
  );
}
