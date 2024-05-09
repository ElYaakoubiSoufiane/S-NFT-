import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import avatar from "../assets/avatars/avatar03.jpg";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const HomeHeader = ({ searchHandler }) => {
  return (
    <View className="bg-black ">
      <View className="flex-row items-center gap-[10px] ">
        <View>
          <Image
            source={avatar}
            resizeMode="contain"
            className="w-[44px] h-[44px] rounded-[30px] "
          />
        </View>
        <View>
          <View className=" flex-row items-center gap-[3px]">
            <Text className="text-white font-semibold text-[20px] ">
              ElYaakoubiSoufiane
            </Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={20}
              color="black"
            />
          </View>
          <View>
            <Text className="text-white  ">Creator</Text>
          </View>
        </View>
      </View>
      <View className="mt-[5px] px-[10px]   ">
        <View className="w-full rounded-[9px] bg-[#370617] flex-row items-center   p-[8px] px-[10px] my-[3px] ">
          <FontAwesome name="search" size={24} color="black" />
          <TextInput
            autoFocus={false}
            placeholder="Search By NFT Name"
            placeholderTextColor="#525252"
            className="flex-1 text-white pl-4"
            onChangeText={searchHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
