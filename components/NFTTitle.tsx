import { View, Text } from "react-native";
import React from "react";
import NFTDate from "./NFTDate";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const NFTTitle = ({ _name, date, creator }) => {
  return (
    <View>
      <View>
        <Text className="text-white font-bold  text-[25px]">{_name}</Text>
      </View>
      <View className="flex-row justify-between items-center">
        <View className="flex-row gap-[8.5px] items-center">
          <Text className="text-white text-[16px]">{creator}</Text>
          <MaterialCommunityIcons name="check-decagram" size={20} color="black" />
        </View>
        <NFTDate date={date} />
      </View>
    </View>
  );
};

export default NFTTitle;
