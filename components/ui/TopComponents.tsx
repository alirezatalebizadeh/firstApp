import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TopComponents = ({ title }: { title: string }) => {
    return (
        <View className='my-5'>
            <View className='flex flex-row items-center justify-between'>
                <Text className='text-xl font-rubik-bold text-black-300'>{title}</Text>
                <TouchableOpacity>
                    <Text className='text-base font-rubik-bold text-primary-300'>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TopComponents