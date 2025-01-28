import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { useRouter } from 'expo-router'
import { settings } from '@/constants/data'

interface SettingItemsProp {
    icon: ImageSourcePropType,
    title: string,
    onPress?: () => void,
    textStyle?: string,
    showArrow?: boolean
}



const SettingIcons = ({ icon, title, onPress, textStyle, showArrow = true }: SettingItemsProp) => {
    const router = useRouter()

    const handleRedirect = () => {
        router.push("/settings")
        console.log('redirect');
    }

    return (
        <TouchableOpacity
            onPress={handleRedirect}
            className='flex flex-row items-center justify-between py-3'>
            <View >
                <TouchableOpacity className='flex flex-row items-center gap-3' onPress={handleRedirect}>
                    <Image source={icon}
                        className='size-6'
                    />
                    <Text className={`text-lg font-rubik-medium text-black-300  ${textStyle}`}>{title}</Text>
                </TouchableOpacity>
            </View>
            {showArrow &&
                <TouchableOpacity onPress={handleRedirect}
                >
                    <Image
                        source={icons.rightArrow}
                        className='size-5'
                    />
                </TouchableOpacity>
            }
        </TouchableOpacity>
    )
}






const Profile = () => {
    const router = useRouter()
    const handleRedirect = () => {
        router.push("/settings")
        console.log('redirect');
    }
    const handleLogout = () => {
        router.push("/sign-in")
    }

    return (
        <SafeAreaView className='h-full bg-white'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName='pb-32 px-7'>
                {/* //! Top bar */}
                <View
                    className='flex flex-row items-center
                 justify-between mt-5'>

                    <Text className='text-xl font-rubik-bold'>Profile</Text>
                    <TouchableOpacity onPress={handleRedirect}>
                        <Image source={icons.bell} className="size-5" />
                    </TouchableOpacity>
                </View>

                {/* //! profile image */}
                <View className="flex flex-row justify-center mt-5">
                    <View className="flex flex-col items-center relative mt-5">
                        <Image
                            source={images.avatar}
                            className="size-44 relative rounded-full"
                        />
                        <TouchableOpacity className="absolute bottom-11 right-2">
                            <Image source={icons.edit} className="size-4" />
                        </TouchableOpacity>

                        <Text className="text-2xl font-rubik-bold mt-2">{"Alireza Talebizadeh"}</Text>
                    </View>
                </View>
                {/* //! Links */}
                <View className='flex flex-col mt-10'>
                    <SettingIcons icon={icons.calendar} title="My Booking" />
                    <SettingIcons icon={icons.wallet} title="Payments" />
                </View>

                <View
                    className='flex flex-col mt-5 border-t pt-5
                     border-primary-200'>
                    {settings.slice(2).map((item, index) => (
                        <SettingIcons {...item} key={index} />
                    ))}
                </View>



                <View
                    className='flex flex-col mt-5 border-t pt-5
                     border-primary-200'>
                    <TouchableOpacity
                        onPress={handleLogout}
                        className='flex flex-row items-center justify-between py-3'>
                        <View >
                            <TouchableOpacity className='flex flex-row items-center gap-3' onPress={handleLogout}>
                                <Image source={icons.logout}
                                    className='size-6'
                                />
                                <Text className={`text-lg font-rubik-medium text-black-300 `}>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile