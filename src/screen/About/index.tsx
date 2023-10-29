import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Image } from 'react-native'
import Button from '../../components/Button'
import {
  Container,
  Title,
  SubTitle,
  AboutLogOffWrapper,
  AboutLogOff,
} from './styles'

const About: React.FC = ({}) => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.navigate('PlantSelect' as never)
  };

  const handleCreateNewUser = () => {
    navigation.navigate('Identification' as never)
  };

  return (
    <Container>
        <Title> Plan(🌱ing) {'\n'} your life {'\n'}?</ Title>
        <View>
          <Image
            source={require('../../../assets/plant-pot.gif')}
            style={{ width: 300, height: 250 }}
          />
        </ View>
        <SubTitle>
          These complex feelings that come with bidding farewell to one phase of our lives and facing the unknown of another -
          plants, as well as teammates, make it easier to deal with them.{'\n'}
          Water your plants; water the ones you care about {'\u2764'}
        </ SubTitle>
      <Button title="Go Back" onPress={handleGoBack} />
      <AboutLogOffWrapper>
        <AboutLogOff onPress={handleCreateNewUser}>
          I want a fancier name!
        </ AboutLogOff>
      </ AboutLogOffWrapper>
    </ Container>
  )
}

export default About
