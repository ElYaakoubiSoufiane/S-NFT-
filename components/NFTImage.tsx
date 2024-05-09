import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import React from "react";
import Button from "./Button";
import { AntDesign, Feather } from "@expo/vector-icons";

const NFTImage = ({ image, imageStyles, Love, arrow, pressHandler }) => {
  return (
    <View className="w-full relative ">
      <Image source={image} className=" w-full h-[400px] rounded-[20px] " />
      {Love && (
        <Button
          stylesButton={styles.buttonH}
          Icon={<AntDesign name="heart" size={20} color={"#4F46E5"} />}
        />
      )}
      {arrow && (
        <Button
          stylesButton={styles.ArrowButton}
          Icon={<Feather name="arrow-left" size={20} color={"#4F46E5"} />}
          pressHandler={pressHandler}
        />
      )}
    </View>
  );
};

export default NFTImage;
const styles = StyleSheet.create({
  buttonH: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    right: 10,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 40,
  },
  ArrowButton: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    left: 10,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 40,
  },
});
