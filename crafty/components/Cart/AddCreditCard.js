import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const AddCreditCard = ({ navigation }) => {
  const [newCard, setNewCard] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const handleInputChange = (field, value) => {
    setNewCard({
      ...newCard,
      [field]: value,
    });
  };

  const inputs = "w-fit h-16 pl-3 bg-[#f9f9f9] rounded-md shadow-sm";
  return (
    <View className="w-fit h-screen gap-4">
      <TextInput
        className={inputs}
        placeholder={"Name on card"}
        onChangeText={(query) => handleInputChange("name", query)}
        value={newCard.name}
      />
      <TextInput
        inputMode="numeric"
        className={inputs}
        placeholder={"Card Number"}
        onChangeText={(query) => handleInputChange("cardNumber", query)}
        value={newCard.cardNumber}
      />
      <TextInput
        className={inputs}
        placeholder={"Expiry Date"}
        onChangeText={(query) => handleInputChange("expiryDate", query)}
        value={newCard.expiryDate}
      />
      <TextInput
        inputMode="numeric"
        className={inputs}
        placeholder={"CVV"}
        onChangeText={(query) => handleInputChange("cvv", query)}
        value={newCard.cvv}
      />
      <View className="w-fit justify-between">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Checkout", {
              state: { card: newCard },
            })
          }
          className="z-50 bg-[#BF9B7A] h-12 w-fit rounded-full justify-center items-center"
        >
          <Text className="text-center text-white text-sm font-medium leading-tight">
            ADD CARD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCreditCard;
