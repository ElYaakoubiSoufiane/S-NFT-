import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ pressHandler, Icon, stylesText, Title, stylesButton }) => {
  const RenderContentIconOrText = () => {
    if (!Icon) {
      return <Text style={stylesText} className="text-black ">{Title && Title}</Text>;
    } else {
      return Icon;
    }
  };

  return (
    <TouchableOpacity
      style={stylesButton}
      onPress={pressHandler && pressHandler}
      className="bg-white text-black border-l-lime-50 border-[2px]"
    >
      <RenderContentIconOrText />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
