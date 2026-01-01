import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Fin_jake from "./images/fin-jake.jpg";
import Fin_jake2 from "./images/fin-jake2.jpg";
import jake_fin from "./images/jake-fine.jpg";
import jake from "./images/jake.jpg";

import played1 from "./images/played1.jpg";
import played2 from "./images/played2.jpg";

export const Moresettings = [
  {
    id: 1,
    label: "Account Deatils",
    icon: <FontAwesome5 name="user-edit" size={22} color="black" />,
  },
  {
    id: 2,
    label: "Settings",
    icon: <Feather name="settings" size={22} color="black" />,
  },
  {
    id: 3,
    label: "Account Security",
    icon: <MaterialIcons name="security" size={22} color="black" />,
  },
  {
    id: 4,
    label: "FAQ",
    icon: <MaterialIcons name="question-answer" size={22} color="black" />,
  },
  {
    id: 5,
    label: "Help & Support",
    icon: <Feather name="help-circle" size={22} color="black" />,
  },
];

export const PodcastImages = [
  {
    id: 1,
    image: jake,
    alt: "Jake",
  },
  {
    id: 2,
    image: Fin_jake,
    alt: "Fin and jake",
  },
  {
    id: 3,
    image: Fin_jake2,
    alt: "Fin and jake 2",
  },
  {
    id: 4,
    image: jake_fin,
    alt: "jake and fin",
  },
];

export const RecentlyPlayed = [
  {
    title: "Black issue with Tracy Clayton",
    time: 25,
    image: played1,
  },
  {
    title: "Fake it until you make it today",
    time: 12,
    image: played2,
  },
];

export const Hosts = [
  {
    id: 1,
    image: played1,
  },
  {
    id: 2,
    image: played2,
  },
];
