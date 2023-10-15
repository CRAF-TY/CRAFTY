import { View, Text, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios"
import ADRESS_API from "../Api.js"
import { useAuth } from '../components/Authprovider/Authprovider.js';
const Conversation = ({ navigation }) => {
  const [Data, setDate] = useState([])
  const { authState } = useAuth()


  const getConversation = async () => {


    try {
      const res = await axios.post(`http://${ADRESS_API}:4000/chat/conversation`, { userId: authState.userId * 1 })
      console.log(res.data)
      if (res) {
        setDate(res.data)
      }

    }
    catch (err) {
      console.log("🚀 ~ file: Conversation.js:14 ~ getConversation ~ err:", err)

    }
  }
  useEffect(() => {


    getConversation();
  }, [])

  return (
    <SafeAreaView>

      <View className ="flex ">
        {/* {Data && Data.length > 0 && Data[0] && Data[0].image ?
          <Image src={`${Data && Data[0].image}`} className=" w-50 h-50" /> :
          < Image source={{ uri: "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" }} className=" w-100 h-50" />} */}
        {Data && Data.map((conv, e) => {
          

          return (
            <View  >
              <ScrollView className="flex-col col-revers w-screen  " >
                <Pressable
                  className=" flex-row bg-[#f9f9f9] text-[#262406] w-screen  h-[25vw]    items-center  justify-between    border-b-2"
                  onPress={() => { navigation.navigate("Chat", { userId: authState * 1, otherUserId: conv.participants[1].id }) }}>
                  {conv && conv.participants[1].image ?

                    <Image source={{ uri: conv.participants[1].image }} className=" w-[16vw]  h-16 rounded-[300px] ml-[10vw]" /> : < Image className=" w-[16vw]  h-16 rounded-[300px] ml-[10vw]  " source={{ uri: "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" }}  />}
                  <Text className="text-center text-[#262406] font-bold text-3xl mr-[42vw] ">{conv.participants[1].name }</Text>
                </Pressable>
              </ScrollView>
            </View>

          )
        })}
      </View>
    </SafeAreaView>

  )
}

export default Conversation