import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { View } from 'react-native'
import { 
  Container, 
  Title, 
  SubTitle, 
  Image, 
  Touch, 
  ArrowIcon, 
  WelcomeButtonText,
  WelcomeDontShowText,
  WelcomeDontShowWrapper
 } from './styles'
import welcomeImg from '../../../assets/welcome-image.png'
import colors from '../../styles/colors'

const Welcome: React.FC = ({}) => {
  const navigation = useNavigation()

  const handleStart = async () => {
    const hideWelcome = await AsyncStorage.getItem("@plantyourlife:hideWelcome")
    if (hideWelcome !== "1") {
      const hasName = await AsyncStorage.getItem("@plantyourlife:user")
      if (hasName) {
        navigation.navigate('PlantSelect' as never)
      } else {
        navigation.navigate('Identification' as never)
      }
    }
  }

  const handleDontShow = async () => {
      await AsyncStorage.setItem("@plantyourlife:hideWelcome", "1")
      handleStart()
  }

  return (
    <Container>
      <Title>
        Plan(🌱) {'\n'} your life {'\n'}
      </ Title>
      <View
        style={{
          width: 350,
          height: 350,
          backgroundColor: colors.green,
          borderRadius: 200,
          overflow: 'hidden',
        }}
      >
        <Image
          source={welcomeImg}
          style={{ width: '100%', height: '100%' }}
        />
      </ View>
      <SubTitle>
        A plant? A roommate? Take care of them both in the easiest way possible!
      </ SubTitle>
      <Touch onPress={handleStart} activeOpacity={0.7}>
        <WelcomeButtonText>Next</ WelcomeButtonText>
        <ArrowIcon name="chevron-right" />
      </ Touch>
      <WelcomeDontShowWrapper>
        <WelcomeDontShowText onPress={handleDontShow}>
          Don't show this again.
          </ WelcomeDontShowText>
        </ WelcomeDontShowWrapper>
    </ Container>
  )
}

export default Welcome
