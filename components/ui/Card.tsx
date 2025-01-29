import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icons from '@/constants/icons'
import images from '@/constants/images'

interface Property {
    title: string;
    location: string;
    price: string;
    rating: number;
    image: any;
    category: string;
}

interface Props {
    item: Property;
    onPress?: () => void;
}

export const FeturedCard = ({ item, onPress }: Props) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const onHeartPress = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            className='flex flex-col items-start w-60 h-80 relative overflow-hidden'
        >
            <View className='w-full h-full'>
                <Image source={item.image} className='size-full rounded-2xl' resizeMode='cover' />
                <Image source={images.cardGradient} className='size-full rounded-2xl absolute bottom-0' />

                <View className='flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5'>
                    <Image source={icons.star} className='size-3.5' />
                    <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>
                        {item.rating}
                    </Text>
                </View>
                <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
                    <Text className='text-xl font-rubik-extrabold text-white' numberOfLines={1}>
                        {item.title}
                    </Text>
                    <Text className='text-base font-rubik text-white' numberOfLines={1}>
                        {item.location}
                    </Text>
                    <View className='flex flex-row items-center justify-between w-full'>
                        <Text className='text-xl font-rubik-extrabold text-white'>
                            ${item.price}
                        </Text>
                        <TouchableOpacity onPress={onHeartPress}>
                            <Image
                                source={icons.heart}
                                className="size-5"
                                tintColor={isFavorite ? 'red' : ''}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const Card = ({ onPress, item }: Props) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const onHeartPress = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <TouchableOpacity onPress={onPress} className='flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative overflow-hidden'>
            <View className='flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50'>
                <Image source={icons.star} className='size-2.5' />
                <Text className='text-xs font-rubik-bold text-primary-300 ml-0.5'>{item.rating}</Text>
            </View>
            <Image source={images.newYork} className='w-full h-40 rounded-lg' resizeMode='cover' />
            {/* //!Bottom Of Card */}
            <View className='flex flex-col mt-2'>
                <Text className="text-base font-rubik-bold text-black-300">
                    {item.title}
                </Text>
                <Text className="text-xs font-rubik text-black-100">
                    {item.location}
                </Text>
            </View>
            <View className='flex flex-row items-center justify-between mt-2'>
                <Text className="text-base font-rubik-bold text-primary-300">
                    ${item.price}
                </Text>
                <TouchableOpacity onPress={onHeartPress}>
                    <Image
                        source={icons.heart}
                        className="w-5 h-5 mr-2"
                        tintColor={isFavorite ? 'red' : 'gray'}
                    />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    )
}

export default Card

