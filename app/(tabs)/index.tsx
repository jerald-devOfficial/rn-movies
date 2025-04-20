import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, ScrollView, View } from 'react-native'

const Home = () => {
  const router = useRouter()
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='w-full absolute z-0' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: '100%' }}
        className='flex-1 px-5'
      >
        <Image source={icons.logo} className='w-12 h-10 mt-20 mb-5 mx-auto' />
        <View className='flex-1 mt-5'>
          <SearchBar onPress={() => router.push('/search')} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
