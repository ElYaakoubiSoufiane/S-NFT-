import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { DATA, SIZES } from "../constants";
import NFTCard from "../components/NFTCard";
import HomeHeader from "../components/HomeHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";export default function Home() {
  const [nftsData, setNftsData] = useState(DATA);
  const moveSearchAnimation = useRef(new Animated.Value(0)).current;
  // Function to handle search bar animation
  const SearchAnimationHandler = () => {
    Animated.spring(moveSearchAnimation, {
      toValue: 1,
      friction: 2,
      delay: -100,
      useNativeDriver: true,
    }).start();
  };
  const searchHandler = (value) => {
    if (value) {
      const filteredData = DATA.filter((nft) =>
        nft.name.toLowerCase().includes(value.toLowerCase())
      );
      setNftsData(filteredData);
    } else {
      setNftsData(DATA);
    }
  };
  const NotFoundNft = () => {
    return (
      // <View className="element-shadow">
      <View className=" flex-1 element-shadow  course-style items-center justify-center py-[29px]">
        <MaterialIcons name="error" size={40} color="turquoise" />
        <Text className="text-white font-bold text-[29px] ">Opps....!</Text>
        <Text className="text-white font-bold text-[29px] ">
          There is no NFT with that name
        </Text>
      </View>
      /* </View> */
    );
  };
  useEffect(() => {
    SearchAnimationHandler;
  }, [SearchAnimationHandler]);

  return (
    <SafeAreaView className="flex-1 bg-[#000000]">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View className="flex-1 pt-10">
          <HomeHeader searchHandler={searchHandler} />

          {!nftsData.length ? (
            <NotFoundNft />
          ) : (
            <FlashList
              data={nftsData}
              renderItem={({ item }) => <NFTCard NFTData={item} />}
              // keyExtractor={(item) => item.id}
              estimatedItemSize={200}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
