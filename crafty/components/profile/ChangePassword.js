import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

const ChangePassword = ({ navigation }) => {
  const [newPass, setnewPass] = useState({
    oldPassword: "",
    newPassword: "",
    cnewPassword: "",
  });

  const handleInputChange = (field, value) => {
    setnewPass({
      ...newPass,
      [field]: value,
    });
  };

  const verif = async () => {
    console.log(newPass);
    axios
      .get("link")
      .then((res) => {
        if (res.data !== newPass.oldPassword) {
          alert("Your old password is incorrect");
        } else if (newPass.newPassword !== newPass.cnewPassword) {
          alert("Confirm your new password");
        } else {
          axios
            .put("link", { newPassword: newPass.newPassword })
            .then((res) => {
              navigation.navigate("Settings");
            });
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred. Please try again.");
      });
  };

  const inputs = "w-fit h-16 pl-3 bg-[#f9f9f9] rounded-md shadow-sm";

  return (
    <View className="w-fit h-screen gap-4">
      <Text className="text-2xl font-bold pl-[25%]">Password change</Text>
      <TextInput
        className={inputs}
        placeholder={"Old Password"}
        onChangeText={(query) => handleInputChange("oldPassword", query)}
        value={newPass.oldPassword}
        secureTextEntry={true}
      />
      <Text
        className="pl-[65%] text-gray-500"
        onPress={() => navigation.navigate("ForgetPassword")}
      >
        Forget Password
      </Text>
      <TextInput
        className={inputs}
        placeholder={"New Password"}
        onChangeText={(query) => handleInputChange("newPassword", query)}
        value={newPass.newPassword}
        secureTextEntry={true}
      />
      <TextInput
        className={inputs}
        placeholder={"Confirm New Password"}
        onChangeText={(query) => handleInputChange("cnewPassword", query)}
        value={newPass.cnewPassword}
        secureTextEntry={true}
      />

      <View className="w-fit justify-between">
        <TouchableOpacity
          onPress={() => verif()}
          className="z-50 bg-[#BF9B7A] h-12 w-fit rounded-full justify-center items-center"
        >
          <Text className="text-center text-white text-sm font-medium leading-tight">
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;