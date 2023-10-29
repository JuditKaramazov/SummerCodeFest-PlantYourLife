import React from 'react'
import { Animated, Image } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Feather } from '@expo/vector-icons'
import {
  Container,
  Name,
  Text as StyledText,
  Hour,
  Time,
  Section,
  ButtonRemoveContainer,
  ButtonRemove,
} from './styles'
import colors from '../../styles/colors'

type MyPlantsCardProps = {
  data: {
    name: string
    photo: string
    hour: string
  }
  handleRemove: () => void
}

const MyPlantsCard: React.FC<MyPlantsCardProps> = ({ data, handleRemove }) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <ButtonRemoveContainer>
            <ButtonRemove onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </ ButtonRemove>
          </ ButtonRemoveContainer>
        </ Animated.View>
      )}
    >
      <Container>
        <Section>
          <Image
            source={{ uri: data.photo }}
            style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 30, backgroundColor: 'transparent' }}
          />
          <Name>{data.name}</ Name>
        </ Section>
        <Hour>
          <StyledText>Water at</ StyledText>
          <Time>{data.hour}</ Time>
        </ Hour>
      </ Container>
    </ Swipeable>
  )
}

export default MyPlantsCard
