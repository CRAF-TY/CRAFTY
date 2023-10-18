import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import BottomSheet from "react-native-simple-bottom-sheet";

const AddItem = () => {
  const [sliderStart, setSliderStart] = useState(0);
  const [cat, setCat] = useState(null);
  const panelRef = useRef(null);
  const [bsOpen, setBSOpen] = useState(false);
  console.log(bsOpen);
  const CATEGORIES =
    "Home & Living,Craft Supplies & Tools,Art & Collectibles,Clothing,Jewelry,Paper & Party Supplies,Accessories,Weddings,Bag & Purses,Books, Movies & Music,Toys & Games,Bath & Beauty,Electronics & Accessories,Pet Supplies,Shoes".split(
      ","
    );
  return (
    <View className="w-screen h-screen px-4 items-start">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-lg mb-2 font-semibold leading-snug">Name</Text>
        <TextInput
          className="mb-4 w-full h-16 pl-3 bg-white rounded-md shadow"
          placeholder={"Name"}
        />
        <Text className="text-lg mb-2 font-semibold leading-snug">
          Category
        </Text>
        <TouchableOpacity
          onPress={() => {
            cat ? cat : setCat("Home & Living");
            setBSOpen(true);
          }}
          className="mb-4 w-[397px] justify-center items-center h-16 bg-white rounded-md shadow"
        >
          <Text className="text-sm">{cat ? cat : "Pick a category"}</Text>
        </TouchableOpacity>
        <Text className="text-lg mb-2 font-semibold leading-snug">Tags</Text>
        <TextInput
          className="mb-4 w-full h-16 pl-3 bg-white rounded-md shadow"
          placeholder={"Separate your tags using commas"}
        />

        <Text className="text-lg mb-2 font-semibold leading-snug">
          Description
        </Text>
        <TextInput
          placeholder="Describe your beautiful creation"
          multiline={true}
          numberOfLines={20}
          className="p-6 mb-4 w-full h-96 bg-white rounded-lg shadow"
        />
        <Text className="text-lg mb-2 font-semibold leading-snug">Price</Text>
        <TextInput
          className="mb-4 w-full h-16 pl-3 bg-white rounded-md shadow"
          keyboardType="numeric"
          placeholder={"Price"}
        />
        <View className="w-32 h-32 items-center justify-center bg-white rounded shadow">
          <View className="w-12 h-12 bg-[#BF9B7A] rounded-full mb-4 items-center justify-center">
            <Svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M10.9999 14.4667C12.9145 14.4667 14.4665 12.9146 14.4665 11C14.4665 9.0854 12.9145 7.53333 10.9999 7.53333C9.08528 7.53333 7.5332 9.0854 7.5332 11C7.5332 12.9146 9.08528 14.4667 10.9999 14.4667Z"
                fill="white"
              />
              <Path
                d="M7.75033 0.166626L5.76783 2.33329H2.33366C1.14199 2.33329 0.166992 3.30829 0.166992 4.49996V17.5C0.166992 18.6916 1.14199 19.6666 2.33366 19.6666H19.667C20.8587 19.6666 21.8337 18.6916 21.8337 17.5V4.49996C21.8337 3.30829 20.8587 2.33329 19.667 2.33329H16.2328L14.2503 0.166626H7.75033ZM11.0003 16.4166C8.01033 16.4166 5.58366 13.99 5.58366 11C5.58366 8.00996 8.01033 5.58329 11.0003 5.58329C13.9903 5.58329 16.417 8.00996 16.417 11C16.417 13.99 13.9903 16.4166 11.0003 16.4166Z"
                fill="white"
              />
            </Svg>
          </View>
          <Text className="text-center text-xs font-semibold leading-3">
            Upload photos
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("submitted");
          }}
          className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-4 rounded-full justify-center items-center"
        >
          <Text className="text-center text-white ">SUBMIT REVIEW</Text>
        </TouchableOpacity>
        <View className="h-40"></View>
      </ScrollView>
      {bsOpen && (
        <BottomSheet
          className="justify-center items-center"
          isOpen={true}
          onClose={() => setBSOpen(false)}
          sliderMinHeight={0}
          sliderMaxHeight={1000}
          ref={(ref) => (panelRef.current = ref)}
        >
          <View className="h-96">
            <WheelPickerExpo
              selectedStyle={{ borderColor: "#333333", borderWidth: 0.2 }}
              height={300}
              width={"%100"}
              initialSelectedIndex={sliderStart}
              items={CATEGORIES.map((name) => ({ label: name, value: "" }))}
              onChange={({ index, item }) => {
                setSliderStart(index);
                setCat(item.label);
              }}
            />
          </View>
        </BottomSheet>
      )}
    </View>
  );
};

export default AddItem;
