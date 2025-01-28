import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect, Slot } from 'expo-router'

const AppLayout = () => {

    const { loading, isLoggedIn } = useGlobalContext()

    if (true) {
        return (
            <SafeAreaView className='bg-white h-full flex justify-center items-center' >
                <ActivityIndicator className='text-primary-300' size={'large'}></ActivityIndicator>
            </SafeAreaView>
        )
    }

    if (!isLoggedIn) return <Redirect href="/sign-in" />


    return <Slot />
}

export default AppLayout