import '@/app/global.css'
import { Stack } from 'expo-router'
import { Fragment } from 'react'
import { StatusBar } from 'react-native'
export default function RootLayout() {
  return (
    <Fragment>
      <StatusBar hidden={true} />

      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='movie/[id]'
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </Fragment>
  )
}
