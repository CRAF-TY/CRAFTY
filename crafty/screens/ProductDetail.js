import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Pressable,
  useColorScheme,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Karousel from "../components/Home/Carousel";
import Svg, { Path } from "react-native-svg";
import Accordion from "../components/ProdDetail/Accordion";
import ProdCard from "../components/ProdCard";
// import HeartIcon from "../components/HeartIcon";
// import BagIcon from "../components/BagIcon";
import { Rating } from "react-native-ratings";
import Reviews from "../components/ProdDetail/Reviews";
import BottomSheet from "react-native-simple-bottom-sheet";
import ItemReviewsList from "../components/ProdDetail/ItemReviewsList";
import axios from "axios";
import ADRESS_API from "../Api";
import { useAuth } from "../components/Authprovider/Authprovider";
import TabNav from "../components/TabNav/TabNav";
const ProductDetail = ({ navigation, route }) => {
  const [toggle, setToggle] = useState(false);
  const { authState } = useAuth();
  AddToFavorite = async () => {
    try {
      res = await axios.post(
        `http://${ADRESS_API}:4000/favourite/addfavourite`,
        { userId: authState && authState.userId * 1, itemId: data && data.id }
      );
      console.log(res, "res 👌👌👌👌👌👌👌");
    } catch (error) {
      console.log(
        "🚀 ~  file: ProdCard.js:16 ~ AddToFavorite=async ~ error:",
        error
      );
    }
  };
  const { item, moreItems } = route.params;
  console.log("the more items", moreItems);
  const dark = useColorScheme();
  const [color, setColor] = useState("");
  const AddToCart = async () => {
    try {
      console.log(item.id, "item.id");
      console.log(item.id, "item.id");
      const response = await axios.post(
        `http://${ADRESS_API}:4000/cart/addtocart`,
        {
          userId: authState.userId * 1,
          itemId: item.id,
          quantity: 1,
        }
      );
      setToggle(true);
      setTimeout(()=>{setToggle(false)},2000)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dark === "dark" ? setColor("#333333") : setColor("#ffffff");
  }, [dark]);
  const [like, setLike] = useState(false);
  const panelRef = useRef(null);
  const [bsOpen, setBSOpen] = useState(false);
  return (
    <View>
      <TabNav navigation={navigation} />
      <ScrollView className=" dark:bg-[#111111]">
        <View className="-my-8">
          <Karousel data={item.images} />
        </View>
        <View className=" flex flex-row justify-between  p-4 items-center">
          <Pressable
            className="h-12 w-72 p-2 rounded-lg border-1 bg-white dark:bg-black "
            onPress={() => {
              navigation.navigate("Chat", { otherUserId: item.user.id });
            }}
          >
            <View className="flex flex-row items-center justify-between">
              <Text className="dark:text-white"> Message seller</Text>
              <Svg className="rotate-45 mr-2 w-7 h-8" viewBox="0 0 32 32">
                <Path
                  class="cls-1"
                  d="M19.47,31a2,2,0,0,1-1.8-1.09l-4-7.57a1,1,0,0,1,1.77-.93l4,7.57L29,3.06,3,12.49l9.8,5.26,8.32-8.32a1,1,0,0,1,1.42,1.42l-8.85,8.84a1,1,0,0,1-1.17.18L2.09,14.33a2,2,0,0,1,.25-3.72L28.25,1.13a2,2,0,0,1,2.62,2.62L21.39,29.66A2,2,0,0,1,19.61,31Z"
                  fill={dark === "light" ? "#101820" : "#ffffff"}
                />
              </Svg>
            </View>
          </Pressable>
          <Pressable
            onPressOut={() => {
              AddToFavorite();
              setLike(!like);
            }}
          >
            {/* <HeartIcon state={like} /> */}
          </Pressable>
          <Pressable
            onPress={() => {
              AddToCart();
            }}
          >
            <BagIcon />
          </Pressable>
        </View>
        {toggle && (
          <View className="items-center justify-center">
            <Text className="absolute text-xs opacity-80 text-[#707324]">
              Item added successfully
            </Text>
          </View>
        )}
        <View className="flex flex-row justify-between px-4 mt-4">
          <Text className="font-semibold text-2xl dark:text-white">A&C</Text>
          <Text className="font-semibold text-2xl dark:text-white">
            $ {item.price}
          </Text>
        </View>
        <Text className=" text-xs font-normal pl-4 text-slate-300">
          {item.name}
        </Text>
        <View className="flex flex-row pl-4 pb-2">
          <Rating
            startingValue={3} //THIS TO UPDATE THE VALUES
            type="custom"
            ratingColor="#FFBA49"
            tintColor={dark === "light" ? "#f4f4f4" : "#111111"}
            ratingBackgroundColor="#d5d5d5"
            readonly={true}
            imageSize={16}
          />
          <Text className="text-neutral-400 text-xs ml-2 ">(10)</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Reviews />
          <Reviews />
          <Reviews />
        </ScrollView>

        <TouchableOpacity
          onPress={() => {
            setBSOpen(true);
          }}
        >
          <Text className=" text-center text-neutral-400 text-xs font-normal ">
            View More Reviews
          </Text>
        </TouchableOpacity>

        <View>
          <Accordion details={item} />
        </View>

        <Text className="text-lg font-medium p-4 mt-2 dark:text-white">
          You can also like this
        </Text>
        <View className="flex flex-row mb-4 items-start justify-start">
          <ScrollView
            className="px-4 mb-20"
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            {moreItems &&
              moreItems.map((item, key) => (
                <ProdCard navigation={navigation} data={item} key={key} />
              ))}
          </ScrollView>
        </View>
      </ScrollView>
      {bsOpen && (
        <View className="z-50 ">
          <BottomSheet
            isOpen={true}
            wrapperStyle={{
              backgroundColor: `${color}`,
            }}
            onClose={() => setBSOpen(false)}
            sliderMinHeight={0}
            sliderMaxHeight={650}
            ref={(ref) => (panelRef.current = ref)}
          >
            <ItemReviewsList close={setBSOpen} reviews={item.reviews} />
          </BottomSheet>
        </View>
      )}
    </View>
  );
};

export default ProductDetail;
