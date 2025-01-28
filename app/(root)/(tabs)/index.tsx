import Card, { FeturedCard } from "@/components/ui/Card";
import Filter from "@/components/ui/Filter";
import NoResults from "@/components/ui/NoResult";
import Search from "@/components/ui/Search";
import TopComponents from "@/components/ui/TopComponents";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { getLatestProperties } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppwrite";
import { Link } from "expo-router";
import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { data: latestProperties, loading } = useAppwrite({ fn: getLatestProperties })


  const handleCardPress = ({ }) => {
    console.log("click in card");
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item)} />
        )}
        keyExtractor={(item) => item.toString()}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 mt-5"
        numColumns={2}

        ListEmptyComponent={
          loading ? (<ActivityIndicator size="large" className="text-primary-300 mt-5" />) :
            (<NoResults />)
        }
        //! Header component => First Component in List
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className='px-5'>
              <View className='flex flex-row items-center
             justify-between mt-5'>
                <View className='flex flex-row items-center'>
                  <Image
                    source={images.avatar}
                    className='size-12 rounded-full'
                  />
                  <View className='flex flex-col items-start justify-center ml-2'>
                    <Text className='text-xs font-rubik text-black-100'>Good Morning</Text>
                    <Text className='text-base font-rubik-medium text-black-100'>Alireza Talebizadeh</Text>
                  </View>
                </View>
                <Image source={icons.bell} className='size-6' />
              </View>
            </View>

            {/* //! Search Components */}
            <Search />

            {/* //! Featured */}
            <TopComponents title='Featured' />

            <FlatList data={[9, 10, 11, 12, 13, 14]}
              renderItem={({ item }) => <FeturedCard item={item} />}
              keyExtractor={(item) => item.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName='flex gap-5 mt-5'
            />

            {/* //!Recommendation */}
            <TopComponents title="Our Recommendation" />
            {/* //! Filter search */}
            <Filter />

          </View>
        )}
      />

    </SafeAreaView>
  );
}
