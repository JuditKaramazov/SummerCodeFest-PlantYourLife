import React, { useState } from 'react'
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Button from '../../components/Button'
import { 
  Container, 
  Title, 
  Input, 
  Emoji, 
  Header, 
  Wrapper 
} from './styles'

const Identification = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFailed, setIsFailed] = useState(false)
  const [name, setName] = useState('')

  const navigation = useNavigation()

  function handleInputBlur() {
    setIsFocused(false)
    setIsFailed(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFailed(!!value)
    setName(value)
  }

  function handleSubmit() {
    if (!name) return
  
    AsyncStorage.setItem('@plantyourlife:username', name)
    navigation.navigate('Confirmation', {
      title: 'Great job!',
      subTitle: 'Now, allow us to give you a hand with this.',
      buttonTitle: 'Start',
      icon: 'hug',
      nextPage: 'PlantSelect',
    })
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper>
          <Header>
            <Emoji>📝</ Emoji>
            <Title>What is{'\n'}your name?</ Title>
          </ Header>
          <Input
            placeholder="Be creative!"
            isFocused={isFocused}
            isFailed={isFailed}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChangeText={handleInputChange}
          />
          <Button
            disabled={!isFailed}
            title="Confirm"
            onPress={handleSubmit}
          />
        </ Wrapper>
      </ TouchableWithoutFeedback>
    </ Container>
  )
}

export default Identification
