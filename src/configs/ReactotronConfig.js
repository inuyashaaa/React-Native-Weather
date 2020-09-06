import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage'

Reactotron.clear()
Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Weather React Native',
    host: 'localhost',
    port: 6969,
  })
  .useReactNative()
  .connect()
