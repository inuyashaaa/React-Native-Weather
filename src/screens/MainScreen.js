import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'
import LottieView from 'lottie-react-native'
import { loading } from '../../assets/animations'

const MainScreen = () => {
  const [weather, setWeather] = useState(false)

  useEffect(() => {
    getNewWeatherByLocation()
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
      <Text>
        {weather?.main?.temp}
      </Text>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
