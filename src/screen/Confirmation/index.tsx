import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Platform } from 'react-native'
import Button from '../../components/Button'
import { 
  Container, 
  Title, 
  Text, 
  Emoji,
   Header 
  } from './styles'

type Props = {
  title: string
  subTitle: string
  buttonTitle: string
  icon: 'hug' | 'noted'
  nextPage: string
}

const emojis = {
  hug: '🤗',
  noted: '✅'
}

const Confirmation = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { title, subTitle, buttonTitle, icon, nextPage } = route.params as Props

  function handleConfirmation() {
    navigation.navigate(nextPage as never)
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header>
        <Emoji>{emojis[icon]}</ Emoji>
        <Title>{title}</ Title>
        <Text>{subTitle}</ Text>
      </ Header>
      <Button title={buttonTitle} onPress={handleConfirmation} />
    </ Container>
  )
}

export default Confirmation
