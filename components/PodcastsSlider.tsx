import React from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import tw from "twrnc";
import { PodcastImages } from "../assets/assets";

const { width: screenWidth } = Dimensions.get("window");
const CAROUSEL_WIDTH = screenWidth - 20;
const ITEM_WIDTH = CAROUSEL_WIDTH * 0.9;

export default function PodcastsSlider() {
  return (
    <View style={tw`w-full `}>
      <Carousel
        width={CAROUSEL_WIDTH}
        height={300}
        data={PodcastImages}
        autoPlay
        loop
        autoPlayInterval={5000}
        scrollAnimationDuration={800}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxAdjacentItemScale: 0.7,
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        renderItem={({ item }) => (
          <View
            style={{
              paddingRight: screenWidth * 0.2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: ITEM_WIDTH,
                height: 220,
                borderRadius: 25,
                overflow: "hidden",
              }}
            >
              <Image
                source={item.image}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
