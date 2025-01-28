import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import icons from '@/constants/icons'
import { useDebouncedCallback } from "use-debounce"
import { useLocalSearchParams, usePathname, router } from 'expo-router'

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text })
  }, 500)

  const [search, setSearch] = useState(params.query)

  const handleSearch = (text: string) => {
    setSearch(text)
    console.log("text-of input :", text);
    // console.log("path of app :", path);//
    console.log("parametres of url :", params.query);
    debouncedSearch(text)
  }

  return (
    <View className='flex flex-row items-center justify-between w-full px-4 rounded-lg 
        bg-accent-100 border border-primary-100 mt-5 py-2'>
      <View className='flex-1 flex flex-row items-center justify-start z-50'>
        <Image source={icons.search} className='size-5' />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder='Search for anything'
          className='text-sm font-rubik text-black-300 ml-2 flex-1'
        />
      </View>
      <TouchableOpacity onPress={() => console.log("Click")
      }>
        <Image source={icons.filter} className='size-5' />
      </TouchableOpacity>
    </View>
  )
}

export default Search