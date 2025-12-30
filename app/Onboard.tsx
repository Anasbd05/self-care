import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import tw from "twrnc";

const data = [
  {
    title: "Take care of your mental health every day",
    feel: ["Happy", "Angry", "Sad"],
    bg: "#79C9C5",
    image: require("../assets/images/face.png"),
  },
  {
    title: "Prioritize rest and recovery for yourself",
    bg: "#FFE2AF",
    image: require("../assets/images/happy.png"),
  },
  {
    title: "Build healthy habits that nurture your wellbeing",
    bg: "#FDB5CE",
    image: require("../assets/images/happiness.png"),
  },
];
export default function Onboard() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  const renderItem = ({ item }: any) => {
    return (
      <View style={tw` flex-1 items-center  bg-white `}>
        <View
          style={tw` w-full flex h-2/4 justify-center items-center bg-[${item.bg}]  rounded-b-[25px] `}
        >
          <Image style={{ height: 280, width: 280 }} source={item.image} />
        </View>
        <View style={tw` mx-14 mt-6 flex flex-col gap-5`}>
          <View
            style={tw`flex flex-row items-center justify-center gap-6 mb-10 `}
          >
            {item.feel?.map((f, index: string) => (
              <Text
                key={index}
                onPress={() => {
                  setActive(f);
                }}
                style={tw`text-xl bg-rose-200 rounded-full py-2 w-24 text-center font-medium ${
                  active === f && "bg-sky-200"
                } `}
              >
                {f}
              </Text>
            ))}
          </View>
          <Text style={tw` text-2xl font-bold text-black text-center `}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item: { title: any }) => item.title;

  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/care")}
        style={tw` mr-2 justify-center items-center `}
      >
        <Text style={tw` text-sky-800 font-bold text-sm `}>Done</Text>
      </TouchableOpacity>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={tw` mr-2  justify-center items-center `}>
        <Text style={tw` text-sky-600 font-semibold text-sm `}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={tw` ml-2 justify-center items-center `}>
        <Text style={tw` text-sky-600 font-semibold text-sm`}>Prev</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotestyles}
        activeDotStyle={styles.Activedotestyles}
        data={data}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dotestyles: {
    backgroundColor: "#ddeeffff",
    marginBottom: 26,
  },
  Activedotestyles: {
    backgroundColor: "#4988C4",
    marginBottom: 26,
  },
});
