import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import Animated from 'react-native-reanimated';
import icons from '@/constants/icons';
import { Link, Redirect } from 'expo-router';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';


const SignIn = () => {
    // const { refetch, loading, isLoggedIn } = useGlobalContext();
    // if (!loading && isLoggedIn) return <Redirect href={`/`} />


    const handleLogin = async () => {
        const result = await login();
        if (result) {
            console.log("Login Success");

        } else {
            Alert.alert("Error", "Faild to login")
        }
        console.log("you clicked in image in sign in page");
    }

    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerClassName="h-full text-center">
                <Image
                    source={images.onboarding}
                    className='w-full h-4/6'
                    resizeMode='contain' />

                <View className='px-10'>
                    <Text className='text-base text-center uppercase
                     font-rubik text-black-200'>
                        Welcome to Real Scout
                    </Text>
                    <Text className='text-3xl font-rubik-bold text-black-300 
                    text-center mt-2'>
                        Let’s get you closer
                        to {"\n"} <Text className='text-primary-300'>your ideal home</Text>
                    </Text>
                    <Text className='text-lg font-rubik
                     text-black-100 text-center mt-12'>Login to Real Scout with Google
                    </Text>
                    <TouchableOpacity onPress={handleLogin} className=''>
                        <View className=''>
                            <Link href="/" className='flex  flex-row items-center justify-center'>
                                <Image source={icons.google}
                                    className='w-5 h-5' resizeMode='contain' />
                                <Text className='text-lg *:font-rubik-medium
                             text-black-300 ml-2'>Sign Up with Google</Text>
                            </Link>

                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default SignIn