import { View, Text, Pressable, Keyboard } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CartItem from "../../components/Cart/CartItem";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Svg, Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import TabNav from "../../components/TabNav/TabNav";
import axios from "axios";
import ADRESS_API from "../../Api";
import { useAuth } from "../../components/Authprovider/Authprovider";
const MyBag = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);
  const [cartTotal, setCartTotal] = useState(90);
  const scrollViewRef = useRef();
  const { authState } = useAuth();
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const GetCart = async () => {
    try {
      const response = await axios.get(
        `http://${ADRESS_API}:4000/cart/getcart/${authState.userId * 1}`
      );
      console.log(
        "🚀 ~ file: MyBag.js:27 ~ GetCart ~ response:",
        response.data.amount
      );
      setData(response.data.cart);
      setAmount(response.data.amount);
    } catch (err) {
      console.log(err, "err");
    }
  };
  const itemplus = async (id) => {
    try {
      const response = await axios.post(
        `http://${ADRESS_API}:4000/cart/addtocart`,
        {
          userId: authState.userId * 1,

          itemId: id,
          quantity: 1,
        }
      );
      setTrigger(!trigger);
    } catch (err) {
      console.log(err);
    }
  };
  const itemMinus = async (id) => {
    try {
      const response = await axios.post(
        `http://${ADRESS_API}:4000/cart/addtocart`,
        {
          userId: authState.userId * 1,

          itemId: id,
          quantity: -1,
        }
      );
      setTrigger(!trigger);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetCart();
  }, [trigger]);
  return (
    <SafeAreaView className=" dark:bg-[#111111] w-screen h-screen p-4 ">
      <TabNav navigation={navigation} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text className=" dark:text-white text-4xl pb-6 font-bold">My Bag</Text>
        <ScrollView
          className="max-h-96"
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
        >
          {data.items &&
            data.items.map((item, key) => {
              return (
                <CartItem
                  total={setCartTotal}
                  current={cartTotal}
                  data={item}
                  key={key}
                  itemminus={itemMinus}
                  itemplus={itemplus}
                />
              );
            })}
        </ScrollView>
      </TouchableWithoutFeedback>
      <View className="pb-20">
        <View className="mt-6 flex flex-row items-center justify-between">
          <TextInput
            onFocus={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
            className="pl-4 w-full h-9 bg-white dark:bg-[#333333] dark:text-white rounded-lg  shadow"
            placeholder={"Enter your promo code"}
          />
          <Pressable
            onPress={Keyboard.dismiss}
            className=" right-9 w-9 h-9 bg-black rounded-full items-center justify-center"
          >
            <Svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 0L4.95 1.05L9.15 5.25H0V6.75H9.15L4.95 10.95L6 12L12 6L6 0Z"
                fill="white"
              />
            </Svg>
          </Pressable>
        </View>
        <View className="flex flex-row pt-6 items-center justify-between">
          <Text className="dark:text-white opacity-50 text-sm font-medium leading-tight">
            Total amount:
          </Text>
          <Text className="dark:text-white text-right text-lg font-semibold leading-snug">
            {amount}$
          </Text>
        </View>
        {amount !== 0 && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Checkout", {
                amount: amount,
                cartId: data.id,
              })
            }
            className="mt-6 bg-[#BF9B7A] h-12 w-fit rounded-full justify-center items-center"
          >
            <Text className="text-center text-white text-sm font-medium leading-tight">
              CHECK OUT
            </Text>
          </TouchableOpacity>
        )}
        {amount === 0 && (
          <Pressable onPress={()=>setToggle(true)}
            className="mt-6 bg-gray-300 h-12 w-fit rounded-full justify-center items-center"
          >
            <Text className="text-center text-white text-sm font-medium leading-tight">
              CHECK OUT
            </Text>
          </Pressable>
        )}
        {toggle && (
            <View className="justify-center items-center mt-52 opacity-70">
            <Text className="text-2xl font-bold dark:text-white">Your cart is empty</Text>
            <Text className="text-xs dark:text-white">Please add some items before proceeding</Text>
            </View>
          )}
      </View>
    </SafeAreaView>
  );
};

export default MyBag;
