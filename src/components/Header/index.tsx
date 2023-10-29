import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Image } from 'react-native'
import { 
  Container, 
  Wrapper, 
  Text, 
  Name 
} from './styles'

type Props = {
  page: 'MyPlants' | 'PlantSelect';
}

const Header = ({ page }: Props) => {
  const [name, setName] = useState('')
  const navigation = useNavigation()

  useEffect(() => {
    async function getUserName() {
      const userName = await AsyncStorage.getItem('@plantyourlife:username')
      setName(userName || '')
    }

    getUserName();
  }, [])

  const goToAbout = () => {
    navigation.navigate('About' as never)
  }

  return (
    <Container>
      <Wrapper>
        {page === 'PlantSelect' && (
          <>
            <Text>Hi there,</ Text>
            <Name>{name}</ Name>
          </>
        )}
        {page === 'MyPlants' && (
          <>
            <Text>My</ Text>
            <Name>Plants</ Name>
          </>
        )}
      </ Wrapper>
      <TouchableOpacity onPress={goToAbout} style={{ position: 'relative', left: 10 }}>
        <Image 
        source={require('../../../assets/waterAbout.gif')} 
        style={{ width: 130, height: 100 }} />
      </ TouchableOpacity>
    </ Container>
  )
}

export default Header
