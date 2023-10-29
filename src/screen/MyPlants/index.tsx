import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { formatDistance } from 'date-fns'
import { enUS } from 'date-fns/locale'
import Header from '../../components/Header'
import { PlantProps } from '../../interfaces'
import { deletePlant, getPlants } from '../../libs/storage'
import Load from '../../components/Load'
import MyPlantsCard from '../../components/MyPlantsCard'
import WaterDropIcon from '../../../assets/waterdrop.png'
import {
  Container,
  Section,
  TipContainer,
  TipText,
  Image,
  Title,
  FlatList,
} from './styles'

const MyPlants = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWaterd, setNextWaterd] = useState('')

  useEffect(() => {
    async function loadingStorageData() {
      try {
        const plantStoraged = await getPlants();
        if (!Array.isArray(plantStoraged) || plantStoraged.length === 0) {
          setLoading(false);
          return;
        }
  
        const nextTime = formatDistance(
          new Date(plantStoraged[0].dateTimeNotification).getTime(),
          new Date().getTime(),
          { locale: enUS }
        )
  
        setNextWaterd(`Water your ${plantStoraged[0].name} in ${nextTime}.`)
        setMyPlants(plantStoraged);
        setLoading(false)
      } catch (error) {

        console.error('Error loading storage data:', error)
        setLoading(false)
      }
    }
  
    loadingStorageData()
  }, [])

  function handleRemove(item: PlantProps) {
    Alert.alert('Remove', `Do you want to remove your ${item.name}?`, [
      { text: 'No', style: 'cancel' },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await deletePlant(item.id.toString())
            setMyPlants((oldPlants) =>
              oldPlants.filter((plant) => plant.id != item.id)
            )
          } catch (err) {
            Alert.alert(
              'It was not possible to remove your plant.',
              'Please, try again.'
            )
          }
        }
      }
    ])
  }

  if (loading) return <Load />

  return (
    <Container>
      <Header page="MyPlants" />
      <Section>
        <TipContainer>
          <Image source={WaterDropIcon} />
          <TipText>{nextWaterd}</ TipText>
        </ TipContainer>
        <Title>Next watering(s)</ Title>
        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <MyPlantsCard data={item} handleRemove={() => handleRemove(item)} />
          )}
        />
      </ Section>
    </ Container>
  )
}

export default MyPlants
