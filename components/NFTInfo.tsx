import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import Button from "./Button";
const NFTInfo = ({ comments, views, price, Love }) => {
  return (
    <View className=" flex-row items-center justify-between">
      <View className="flex-row items-center justify-center bg-[#00509d] w-[90px] rounded-[24px] py-[3px] gap-[4px]">
        <AntDesign name="eyeo" size={24} color="black" />
        <Text className=" font-medium  text-[19px] mx-auto text-white">{views}</Text>
      </View>
      <View className="flex-row items-center justify-center bg-[#00509d] w-[90px] rounded-[24px] py-[3px] gap-[4px]">
        <FontAwesome name="comment" size={24} color="black" />
        <Text className=" font-medium  text-[19px] text-white">{comments}</Text>
      </View>
      <View className="flex-row items-center justify-center bg-[#00509d] w-[90px] rounded-[24px] py-[3px] gap-[4px]">
        <FontAwesome5 name="ethereum" size={24} color="black" />
        <Text className=" font-medium  text-[19px] text-white">{price}</Text>
      </View>
      {Love && (
        <View>
          <Button
            Icon={
              <Ionicons name="heart-circle" size={24} color="white" />
              // <AntDesign name="heart" size={18} className="text-[#edfda6]" />
            }
            stylesButton={styles.buttonHeart}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonHeart: {
    backgroundColor: "#111827",
    padding: 5,
    borderRadius: 20,
    borderColor: "#a19de9",
  },
});
export default NFTInfo;
