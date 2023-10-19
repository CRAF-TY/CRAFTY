import { View, Text, Pressable } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";
import { useRoute } from "@react-navigation/native";

const TabNav = ({ navigation }) => {
  const route = useRoute();
  const active = route.name;
  const txtActive = "text-xs font-semibold text-[#BF9B7A]";
  const txtInactive = "text-xs text-[#9B9B9B]";
  return (
    <View className="absolute z-50 bottom-0 items-center justify-center w-screen h-24 pb-4 bg-[#f9f9f9] shadow">
      <View className="w-screen p-8 flex flex-row justify-between">
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          className="items-center justify-center gap-1"
        >
          <Svg width="32" height="27" viewBox="0 0 29 27" fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.2941 24V15.5294H16.9412V24H24V12.7059H28.2353L14.1176 0L0 12.7059H4.23529V24H11.2941Z"
              fill={active === "Home" ? "#BF9B7A" : "#ffffff"}
              stroke={active === "Home" ? "#ffffff" : "#9B9B9B"}
            />
          </Svg>
          <Text className={active === "Home" ? txtActive : txtInactive}>
            Home
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("MyBag");
          }}
          className="items-center justify-center gap-1"
        >
          <Svg width="32" height="32" viewBox="0 0 30 30" fill="none">
            <Path
              d="M26.4558 24.5187L26.4583 24.542L26.4629 24.565C26.4867 24.6823 26.5 24.796 26.5 24.9091C26.5 25.8094 25.8081 26.5 25 26.5H15H5C4.19186 26.5 3.5 25.8094 3.5 24.9091C3.5 24.796 3.51331 24.6823 3.53706 24.565L3.54172 24.542L3.5442 24.5187L5.4972 6.14375L5.5 6.11741V6.09091C5.5 5.19065 6.19186 4.5 7 4.5H15H23C23.8081 4.5 24.5 5.19065 24.5 6.09091V6.11741L24.5028 6.14375L26.4558 24.5187ZM20.5 10.2727V9.44368C21.1009 9.08516 21.5 8.41815 21.5 7.65909C21.5 6.53849 20.6249 5.59091 19.5 5.59091C18.3751 5.59091 17.5 6.53849 17.5 7.65909V10.2727C17.5 11.7469 16.3571 12.9091 15 12.9091C13.6429 12.9091 12.5 11.7469 12.5 10.2727V7.65909C12.5 6.53849 11.6249 5.59091 10.5 5.59091C9.37514 5.59091 8.5 6.53849 8.5 7.65909C8.5 8.41815 8.89908 9.08516 9.5 9.44368V10.2727C9.5 13.41 11.9461 16 15 16C18.0539 16 20.5 13.41 20.5 10.2727Z"
              fill={active === "MyBag" ? "#BF9B7A" : "#ffffff"}
              stroke={active === "MyBag" ? "#ffffff" : "#9B9B9B"}
            />
          </Svg>
          <Text className={active === "MyBag" ? txtActive : txtInactive}>
            My Bag
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Social");
          }}
          className="items-center justify-center gap-2"
        >
          <Svg width="28" height="28" viewBox="-2 0 28 25" fill="none">
            <Path
              d="M12.6692 0C9.31088 0.00352951 6.09112 1.33918 3.71642 3.71388C1.34173 6.08858 0.00607176 9.30834 0.00254225 12.6667C-0.00935232 15.7963 1.15133 18.8169 3.25588 21.1333L0.202542 24.2C0.105414 24.2893 0.0389464 24.407 0.0126111 24.5363C-0.0137241 24.6655 0.00141653 24.7998 0.0558755 24.92C0.105889 25.0417 0.190821 25.146 0.299968 25.2195C0.409114 25.2931 0.537592 25.3327 0.669209 25.3333H12.6692C16.0286 25.3333 19.2504 23.9988 21.6259 21.6234C24.0014 19.2479 25.3359 16.0261 25.3359 12.6667C25.3359 9.30726 24.0014 6.08544 21.6259 3.70998C19.2504 1.33452 16.0286 0 12.6692 0ZM7.33588 15.3333C7.07217 15.3333 6.81438 15.2551 6.59512 15.1086C6.37585 14.9621 6.20495 14.7539 6.10404 14.5102C6.00312 14.2666 5.97672 13.9985 6.02816 13.7399C6.07961 13.4812 6.2066 13.2437 6.39307 13.0572C6.57954 12.8707 6.81711 12.7437 7.07576 12.6923C7.3344 12.6408 7.60249 12.6672 7.84612 12.7682C8.08976 12.8691 8.29799 13.04 8.4445 13.2592C8.59101 13.4785 8.66921 13.7363 8.66921 14C8.66921 14.3536 8.52873 14.6928 8.27868 14.9428C8.02864 15.1929 7.6895 15.3333 7.33588 15.3333ZM12.6692 15.3333C12.4055 15.3333 12.1477 15.2551 11.9284 15.1086C11.7092 14.9621 11.5383 14.7539 11.4374 14.5102C11.3365 14.2666 11.31 13.9985 11.3615 13.7399C11.4129 13.4812 11.5399 13.2437 11.7264 13.0572C11.9129 12.8707 12.1504 12.7437 12.4091 12.6923C12.6677 12.6408 12.9358 12.6672 13.1795 12.7682C13.4231 12.8691 13.6313 13.04 13.7778 13.2592C13.9243 13.4785 14.0025 13.7363 14.0025 14C14.0025 14.3536 13.8621 14.6928 13.612 14.9428C13.362 15.1929 13.0228 15.3333 12.6692 15.3333ZM18.0025 15.3333C17.7388 15.3333 17.481 15.2551 17.2618 15.1086C17.0425 14.9621 16.8716 14.7539 16.7707 14.5102C16.6698 14.2666 16.6434 13.9985 16.6948 13.7399C16.7463 13.4812 16.8733 13.2437 17.0597 13.0572C17.2462 12.8707 17.4838 12.7437 17.7424 12.6923C18.0011 12.6408 18.2692 12.6672 18.5128 12.7682C18.7564 12.8691 18.9647 13.04 19.1112 13.2592C19.2577 13.4785 19.3359 13.7363 19.3359 14C19.3359 14.3536 19.1954 14.6928 18.9454 14.9428C18.6953 15.1929 18.3562 15.3333 18.0025 15.3333Z"
              fill={active === "Social" ? "#BF9B7A" : "#ffffff"}
              stroke={active === "Social" ? "#ffffff" : "#9B9B9B"}
            />
          </Svg>

          <Text className={active === "Social" ? txtActive : txtInactive}>
            Social
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Favorites");
          }}
          className="items-center justify-center gap-1"
        >
          <Svg width="32" height="30" viewBox="0 0 28 26" fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.079 25L12.1826 23.2736C5.44687 17.1657 1 13.1373 1 8.19346C1 4.16512 4.16512 1 8.19346 1C10.4692 1 12.6534 2.0594 14.079 3.73351C15.5046 2.0594 17.6888 1 19.9646 1C23.9929 1 27.158 4.16512 27.158 8.19346C27.158 13.1373 22.7112 17.1657 15.9755 23.2866L14.079 25Z"
              fill={active === "Favorites" ? "#BF9B7A" : "#ffffff"}
              stroke={active === "Favorites" ? "#ffffff" : "#9B9B9B"}
            />
          </Svg>
          <Text className={active === "Favorites" ? txtActive : txtInactive}>
            Favorites
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Profile");
          }}
          className="items-center justify-center gap-1"
        >
          <Svg width="35" height="35" viewBox="0 0 32 32" fill="none">
            <Path
              d="M15.9998 16C18.9454 16 21.3332 13.6122 21.3332 10.6666C21.3332 7.72113 18.9454 5.33331 15.9998 5.33331C13.0543 5.33331 10.6665 7.72113 10.6665 10.6666C10.6665 13.6122 13.0543 16 15.9998 16Z"
              fill={active === "Profile" ? "#BF9B7A" : "#ffffff"}
              stroke={active === "Profile" ? "#ffffff" : "#9B9B9B"}
            />
            <Path
              d="M26.6668 25.3333V26.6666C26.6668 27.0203 26.5264 27.3594 26.2763 27.6095C26.0263 27.8595 25.6871 28 25.3335 28H6.66683C6.31321 28 5.97407 27.8595 5.72402 27.6095C5.47397 27.3594 5.3335 27.0203 5.3335 26.6666V25.3333C5.3335 23.2116 6.17635 21.1768 7.67664 19.6765C9.17693 18.1762 11.2118 17.3333 13.3335 17.3333H18.6668C20.7886 17.3333 22.8234 18.1762 24.3237 19.6765C25.824 21.1768 26.6668 23.2116 26.6668 25.3333Z"
              fill={active === "Profile" ? "#BF9B7A" : "#ffffff"}
              stroke={active === "Profile" ? "#ffffff" : "#9B9B9B"}
            />
          </Svg>
          <Text className={active === "Profile" ? txtActive : txtInactive}>
            Profile
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TabNav;