import { View, Text } from "react-native";
import React from "react";

const NFTMoreinfo = ({ address, tokenId, tokenSt, blockChain }) => {
  return (
    <View>
      <View className="flex-row justify-between  items-center border-b-[1px] border-b-[#1F2937] my-[5.5px]  ">
        <Text className="text-white">Contract Address</Text>
        <Text className="text-gray-500 mb-[7px] ">{address}</Text>
      </View>
      <View className="flex-row justify-between  items-center border-b-[1px] border-b-[#1F2937] my-[5.5px] ">
        <Text className="text-white">Token Id</Text>
        <Text className="text-gray-500 mb-[7px] ">{tokenId}</Text>
      </View>
      <View className="flex-row justify-between  items-center border-b-[1px] border-b-[#1F2937] my-[5.5px] ">
        <Text className="text-white">Token Standerd</Text>
        <Text className="text-gray-500 mb-[7px] ">{tokenSt}</Text>
      </View>
      <View className="flex-row justify-between  items-center border-b-[1px] border-b-[#1F2937] my-[5.5px] ">
        <Text className="text-white">BlockChain</Text>
        <Text className="text-gray-500 mb-[7px] ">{blockChain}</Text>
      </View>
    </View>
  );
};

export default NFTMoreinfo;
