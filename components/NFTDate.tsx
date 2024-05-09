import { View, Text } from "react-native";
import React from "react";

const NFTDate = ({ date }) => {
  return (
    <View>
      <Text className="font-semibold text-gray-100 text-[18.5px]">{date}</Text>
    </View>
  );
};

export default NFTDate;
