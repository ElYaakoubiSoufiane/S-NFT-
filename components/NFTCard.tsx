import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import React from "react";
import NFTImage from "./NFTImage";
import NFTAvatars from "./NFTAvatars";
import NFTTitle from "./NFTTitle";
import NFTInfo from "./NFTInfo";
import { useNavigation } from "@react-navigation/native";

export default function NFTCard({ NFTData }) {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("NFTDetails", { NFTData });
    console.log(navigation);
  };
  // border-white
  //border-[3px]
  return (
    <TouchableWithoutFeedback>
      <SafeAreaView
        className="bg-[#000000]   border-gray-600  
        border-[1.5px]	 rounded-[28px] mb-[23.5px] p-[12px] my-[14px] mx-[4px] "
        // style={styles.Shadow}
      >
        <TouchableOpacity onPress={pressHandler}>
          <NFTImage
            image={NFTData.image}
            imageStyles={undefined}
            Love={undefined}
            arrow={undefined}
            pressHandler={undefined}
          />
        </TouchableOpacity>
        <View className="w-full py-[19px] mt-[-30px] flex-row justify-betweend ">
          <NFTAvatars avatars={NFTData.avatars} />
        </View>
        <View className="w-full  p-[19px]">
          <NFTTitle
            _name={NFTData.name}
            creator={NFTData.creator}
            date={NFTData.date}
          />
          <View className="mt-[13.5px]">
            <NFTInfo
              comments={NFTData.comments}
              views={NFTData.views}
              price={NFTData.price}
              Love
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
// const styles = StyleSheet.create({
//   Shadow: {
//     shadowOffset: { width: 10, height: 10 },
//     shadowColor: "#ffffff",
//     shadowOpacity: 10,
//     shadowRadius: 10,
//   },
// });
