import { View, Text, Image } from "react-native";
import React from "react";

const NFTAvatars = ({ avatars }) => {
  return (
    <View className="flex-row px-[5px] ">
      {avatars.map((avatar) => (
        <Image
          key={avatar.id}
          source={avatar.image}
          resizeMode="contain"
          className="w-[40px] h-[40px] ml-[-5px] rounded-[40px] "
        />
      ))}
    </View>
  );
};

export default NFTAvatars;
