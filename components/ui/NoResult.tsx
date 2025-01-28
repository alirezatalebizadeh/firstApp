import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import images from "@/constants/images";

const NoResults = () => {
    return (
        <View className="flex items-center my-5 overflow-hidden">
            <Image
                source={images.noResult}
                className="w-11/12 h-[320px]"
                style={styles.image}
                resizeMode="contain"
            />
            <Text className="text-2xl font-rubik-bold text-black-300 mt-5">
                No Result
            </Text>
            <Text className="text-base text-black-100 mt-2">
                We could not find any result
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    image: {
        width: "90%",
        height: 320,
        maxWidth: 600,
    },
});

export default NoResults;
