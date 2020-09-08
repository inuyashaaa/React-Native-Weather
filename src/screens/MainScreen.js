import React, { useState, useEffect } from 'react'
import {
  View, Text, StyleSheet, Image, Dimensions, ImageBackground,
} from 'react-native'
import axios from 'axios'
import LottieView from 'lottie-react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import moment from 'moment'
import { loading } from '../../assets/animations'
import { search, menu, background1 } from '../../assets/images'

const { width, height } = Dimensions.get('window')
const MainScreen = (props) => {
  console.tron.log({ props })
  const { navigation } = props
  const [weather, setWeather] = useState(false)

  useEffect(() => {
    getNewWeatherByLocation()
    console.log('================================================')
    console.log('moment', moment().format('LT - dddd, DD MMM YYYY'))
    console.log('================================================')
  }, [])

  const getNewWeatherByLocation = async () => {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=ho%20Chi%20Minh&appid=5a946fa5e49dfe52dca7c9e3e78e9463&units=metric')
    const timeout = setTimeout(() => {
      setWeather(response.data)
      clearTimeout(timeout)
    }, 2000)
  }

  if (!weather) {
    return (
      <View style={styles.container}>
        <LottieView
          style={{ flex: 1 }}
          source={loading}
          autoPlay
          loop
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* <Image
        source={background1}
        style={{
          width,
          height,
          position: 'absolute',
        }}
      /> */}
      <ImageBackground source={background1} style={{ width, height }}>
        <SafeAreaView />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 34 }}>
          <Image
            source={search}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Image
            source={menu}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 34 }}>
          <Text style={{
            fontFamily: 'Gilroy-Bold', fontSize: 36, color: '#FFFFFF', marginTop: 28, marginBottom: 8,
          }}
          >
            Ho Chi Minh City
          </Text>
          <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 18, color: '#FFFFFF' }}>{moment().format('LT - dddd, DD MMM YYYY')}</Text>
        </View>
        <View style={{ paddingTop: 120, paddingLeft: 34 }}>
          <Text style={{ color: 'white', fontFamily: 'Gilroy-Bold', fontSize: 96 }}>
            {weather?.main?.temp}
            {' '}
            *
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
