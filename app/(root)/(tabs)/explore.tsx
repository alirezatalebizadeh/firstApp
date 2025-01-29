import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, Button, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { Link, router, useLocalSearchParams } from 'expo-router'
import images from '@/constants/images'
import icons from '@/constants/icons'
import Search from '@/components/ui/Search'
import Card, { FeturedCard } from '@/components/ui/Card'
import Filter from '@/components/ui/Filter'
import { useGlobalContext } from '@/lib/global-provider'
import { useAppwrite } from '@/lib/useAppwrite'
import { getLatestProperties, getProperties } from '@/lib/appwrite'
import NoResults from '@/components/ui/NoResult'
import { cards, featuredCards } from '@/constants/data'
import TopComponents from '@/components/ui/TopComponents'

const Explore = () => {

    const handleCardPress = () => {
        console.log("clicke");
    }
    return (
        <SafeAreaView className="bg-white h-full px-2"
        >
            <FlatList data={cards}
                renderItem={({ item }) => (
                    <Card item={item} onPress={() => handleCardPress()} />
                )}
                keyExtractor={(item) => item.toString()}
                contentContainerClassName="pb-32  "
                columnWrapperClassName="flex gap-5 mt-5 "
                numColumns={2}
                ListEmptyComponent={
                    cards.length > 0 ? (<ActivityIndicator size="large" className="text-primary-300 mt-5" />) :
                        (<NoResults />)
                }
                //! Header component => First Component in List
                ListHeaderComponent={() => (
                    <View className="px-5">
                        <View className="flex flex-row items-center justify-between mt-5">
                            <TouchableOpacity
                                onPress={() => router.back()}
                                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
                            >
                                <Image source={icons.backArrow} className="size-5" />
                            </TouchableOpacity>

                            <Text className="text-base mr-2 text-center font-rubik-medium text-black-300">
                                Search for Your Ideal Home
                            </Text>
                            <Image source={icons.bell} className="w-6 h-6" />
                        </View>
                        {/* //! Search Components */}
                        <Search />

                        <View className="mt-5">
                            <Text className="text-xl font-rubik-bold text-black-300 mt-5">
                                Found  {featuredCards?.length} Properties
                            </Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

export default Explore