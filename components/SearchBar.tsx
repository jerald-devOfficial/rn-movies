import { icons } from '@/constants/icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

interface SearchBarProps {
  placeholder?: string
  onPress?: () => void
}

const SearchBar = ({ placeholder, onPress }: SearchBarProps) => {
  const router = useRouter()
  return (
    <View className='flex-row items-center justify-between bg-dark-200 rounded-full px-5 py-4'>
      <Image
        source={icons.search}
        className='size-5'
        resizeMode='contain'
        tintColor='#ab8ff'
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor='#a8b5db'
        className='flex-1 text-white ml-2'
        onPress={onPress}
        value=''
        onChangeText={() => {}}
      />
    </View>
  )
}

export default SearchBar
