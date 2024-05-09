import {
  View,
  Text,
  Image,
  StyleSheet,
  PixelRatio,
  Animated,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef } from "react";
// import { SIZES } from "../constants";
import nft08 from "../assets/images/nft08.jpg";
import nft06 from "../assets/images/nft06.jpg";
import nft04 from "../assets/images/nft04.jpg";
import { SIZES } from "./../constants/themes";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
const fontScale = PixelRatio.getFontScale();
const images = [
  {
    id: 1,
    img: nft08,
  },
  {
    id: 2,
    img: nft06,
  },
  {
    id: 3,
    img: nft04,
  },
];

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const duration = 500;
  const delay = duration + 500;
  const fadeImageAnimation = useRef(new Animated.Value(0)).current;
  const moveImageAnimation = useRef(
    new Animated.ValueXY({ x: 100, y: 100 })
  ).current;
  const fadeTextAnimation = useRef(new Animated.Value(0)).current;
  const moveButtonAnimation = useRef(new Animated.Value(1)).current;
  const textAnimationHandler = () => {
    Animated.timing(fadeTextAnimation, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };
  const buttonAnimationHandler = () => {
    Animated.spring(moveButtonAnimation, {
      toValue: 0,
      friction: 5,
      delay: 900,
      useNativeDriver: true,
    }).start();
  };
  /*Navigation*/
  const pressHandler = () => {
    // navigation.navigate("Home");/
    navigation.navigate("LoginScreen");
  };
  const imageAnimationHandler = () => {
    Animated.sequence([
      Animated.timing(fadeImageAnimation, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.spring(moveImageAnimation, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }),
    ]).start();
  };
  useEffect(() => {
    imageAnimationHandler();
    textAnimationHandler();
    buttonAnimationHandler();
  }, [imageAnimationHandler, textAnimationHandler, buttonAnimationHandler]);
  return (
    <SafeAreaView className=" flex flex-1  justify-center items-center bg-black   py-[18px]">
      <Animated.View
        style={[
          {
            top: -SIZES.medium,
            flexDirection: "row",
            gap: SIZES.small,
            paddingVertical: 20,
          },
          {
            opacity: fadeImageAnimation,
            transform: moveImageAnimation.getTranslateTransform(),
          },
        ]}
      >
        <View
          className="bg-[#1F2937]"
          style={{ borderRadius: SIZES.medium, padding: SIZES.small }}
        >
          <Image
            style={{ borderRadius: SIZES.medium, height: 200, width: 200 }}
            source={nft04}
          />
        </View>
        <View
          className="bg-[#1F2937]"
          style={[
            { borderRadius: SIZES.medium, padding: SIZES.small },
            { top: SIZES.medium + 30 },
          ]}
        >
          <Image
            style={{ borderRadius: SIZES.medium, height: 200, width: 200 }}
            source={nft06}
          />
        </View>
        <View
          className="bg-[#1F2937]"
          style={{ borderRadius: SIZES.medium, padding: SIZES.small }}
        >
          <Image
            style={{ borderRadius: SIZES.medium, height: 200, width: 200 }}
            source={nft08}
          />
        </View>
      </Animated.View>
      <Animated.View
        className="m-[9px] my-[24px] p-[9px] "
        style={{ opacity: fadeTextAnimation }}
      >
        <Text className="font-bold text-white  text-center text-[28px] ">
          Find, Collect and Sell Amazing NFTs
        </Text>
        <Text className=" font-light text-center mt-[19px] text-gray-500 ">
          Explore the top collection of NFTs and buy and sell your NFTs as well
        </Text>
      </Animated.View>
      <Animated.View
        className=" absolute bottom-[30px]  my-[23px]  "
        style={{
          transform: [
            {
              translateX: moveButtonAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 200],
              }),
            },
          ],
        }}
      >
        <Button
          Title="Get Started"
          pressHandler={pressHandler}
          stylesButton={styles.button}
          stylesText={styles.textButton}
        />
        <View></View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff8181",
    padding: SIZES.small + 4,
    width: 240,
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  textButton: {
    color: "#000000",

    fontSize: SIZES.large + 5,
  },
});
