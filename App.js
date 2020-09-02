import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'
import LottieView from 'lottie-react-native'
import { loading } from './assets/animations'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: false,
    }
  }

  async componentDidMount() {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=ho%20Chi%20Minh&appid=5a946fa5e49dfe52dca7c9e3e78e9463&units=metric')
    console.log('================================================')
    console.log('response', response)
    console.log('response', response.status)
    console.log('response', response.data)
    console.log('================================================')
    setTimeout(() => {
      this.setState({
        weather: response.data,
      })
    }, 2000)
  }

  render() {
    const { weather } = this.state
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
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
