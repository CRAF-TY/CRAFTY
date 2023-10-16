import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
// import data from "data.json";
import { Svg, Path } from "react-native-svg";

const data=[
  {
    "Title":"Item Details",
    "Description":"These high quality personalized marble acrylic /mango wood coasters will make unique and one of a kind gifts for a wedding , anniversary , housewarming, bridal shower, wedding favors , or any occasion that needs personal touch. "
  },
  {
    "Title":"Shipping Infos",
    "Description":"These high quality personalized marble acrylic /mango wood coasters will make unique and one of a kind gifts for a wedding , anniversary , housewarming, bridal shower, wedding favors , or any occasion that needs personal touch. "
  },
  {
    "Title":"Support",
    "Description":"These high quality personalized marble acrylic /mango wood coasters will make unique and one of a kind gifts for a wedding , anniversary , housewarming, bridal shower, wedding favors , or any occasion that needs personal touch. "
  }
]

export default function Accordion() {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [isRotated, setIsRotated] = React.useState(false);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  return (
    <View>
      <View className="flex-1 bg-f9f9f9 justify-center mt-4">
        {data.map(({ Title, Description }, index) => {
          return (
            <TouchableOpacity
              key={Title}
              onPress={() => {
                setCurrentIndex(index === currentIndex ? null : index);
              }}
              activeOpacity={0.9}
              
            >
              
              <View className="flex-grow">
                <View className="flex flex-row ml-2 ">
                  <Text className="text-base tracking-wide items-center justify-center mb-1">
                    {Title}
                  </Text>
                  <Svg
                    className={`w-4 h-4 mt-3 absolute right-4 ${
                      isRotated ? "rotate-90" : ""
                    }`}
                    viewBox="0 0 6 8"
                    fill="none"
                    onPress={toggleRotation}
                  >
                    <Path
                      d="M0.726562 7.06L3.7799 4L0.726562 0.94L1.66656 -4.10887e-08L5.66656 4L1.66656 8L0.726562 7.06Z"
                      fill="#222222"
                    />
                  </Svg>
                  
                </View>
                <View className="border-t opacity-25"></View>
                {index === currentIndex && (
                  <View className="mt-9 ml-2">
                    <Text className="text-sky-500 underline underline-offset-4">Tag1-Tag2-Tag3</Text>
                    <Text
                      key={Description}
                      className="text-sm leading-6 text-left"
                    >
                      {Description}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}