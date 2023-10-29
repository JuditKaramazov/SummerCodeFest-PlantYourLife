import React from 'react'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import loadAnimation from '../../assets/load.json'

const Load = () => {
  return (
    <Container>
      <LottieAnimationView source={loadAnimation} autoPlay loop />
    </ Container>
  )
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const LottieAnimationView = styled(LottieView)`
  width: 200px;
  height: 200px;
  background: transparent;
`

export default Load
