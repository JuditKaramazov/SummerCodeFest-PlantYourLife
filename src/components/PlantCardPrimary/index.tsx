import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import { Container, Text } from './styles'

interface PlantProps extends RectButtonProps {
  data: {
    name: string
    photo: string
  }
  handleRemove: () => void;
}

const PlantCardPrimary = ({ data, handleRemove, ...rest }: PlantProps) => {
  return (
    <Container {...rest}>
      <Image 
        style={{ width: 90, height: 90, resizeMode: 'contain', borderRadius: 20 }}
        source={{ uri: data.photo }}
      />
      <Text>{data.name}</Text>
    </Container>
  )
}

export default PlantCardPrimary
