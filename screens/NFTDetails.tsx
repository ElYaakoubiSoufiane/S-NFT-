import {
  View,
  Text,
  StyleSheet,
  Animated,
  NativeModules,
  Platform,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NFTImage from "../components/NFTImage";
import NFTAvatars from "../components/NFTAvatars";
import NFTTitle from "../components/NFTTitle";
import NFTInfo from "../components/NFTInfo";
import NFTMoreinfo from "../components/NFTMoreinfo";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
const Native =
  Platform.OS === "android"
    ? NativeModules.RNSweetAlert
    : NativeModules.SweetAlertManager;
const NFTDetails = ({ route, navigation }) => {
  const { NFTData } = route.params;
  const moveAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const navig = useNavigation();
  const moveAnimationHandler = () => {
    Animated.spring(moveAnimation, {
      toValue: 1,
      friction: 6,
      tension: 80,
      useNativeDriver: true,
    }).start();
  };
  const fadeAnimationHandler = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    moveAnimationHandler();
    fadeAnimationHandler();
  }, [moveAnimationHandler, fadeAnimationHandler]);
  const BuyHandler = () => {
    navig.navigate("BuyScreen");
    // navigation.goBack();
  };

  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView className=" flex-1 h-[500px]  bg-black">
      <Animated.View
        className="flex-1"
        style={{
          transform: [
            {
              translateX: moveAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [200, 0],
              }),
            },
          ],
        }}
      >
        <NFTImage
          imageStyles={styles.imageStyle}
          image={NFTData.image}
          Love
          arrow
          pressHandler={pressHandler}
        />
        <View className="px-[23.5px]">
          <View className="mt-[-22px]">
            <NFTAvatars avatars={NFTData.avatars} />
          </View>
          <View className="my-[19px]">
            <NFTTitle
              _name={NFTData.name}
              creator={NFTData.creator}
              date={NFTData.date}
            />
          </View>
          <View className="my-[19px]">
            <NFTInfo
              price={NFTData.price}
              views={NFTData.views}
              comments={NFTData.comments}
              Love={undefined}
            />
            <NFTMoreinfo
              address={NFTData.address}
              tokenId={NFTData.tokenId}
              tokenSt={NFTData.tokenSt}
              blockChain={NFTData.blockchain}
            />
          </View>
        </View>
        <Animated.View
          className="w-full absolute justify-center flex-1 flex-row gap-3 items-center z-1 bottom-[9px] "
          style={{ opacity: fadeAnimation }}
        >
          <View className="bg-[#d9d9d9] w-[250px] flex-row justify-between items-center p-[20px] rounded-[20px]  ">
            <View>
              <Text className="text-white font-semibold text-[19px]  ">
                Top Bid
              </Text>
              <View className="flex-row  items-center p-[5px] gap-[2px]">
                <FontAwesome name="dollar" size={15} color="white" />
                <Text className="text-white font-semibold text-[19px]  ">
                  {NFTData.topBid}
                </Text>
              </View>
            </View>
            <Button
              stylesButton={styles.button}
              Title="Place a bid"
              stylesText={styles.text}
              pressHandler={undefined}
              Icon={undefined}
            />
          </View>
          <View>
            <Button
              stylesButton={styles.BuyButton}
              stylesText={styles.BuyText}
              Title="Buy"
              pressHandler={BuyHandler}
              Icon={undefined}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default NFTDetails;
const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 500,
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#000000",
    paddingHorizontal: 10,
    width: 90,
    borderRadius: 10,
  },
  BuyButton: {
    backgroundColor: "#d9d9d9",
    padding: 16,
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    // fontFamily: "semibold",
    fontSize: 16,
  },
  BuyText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",

    fontSize: 20,
  },
});
