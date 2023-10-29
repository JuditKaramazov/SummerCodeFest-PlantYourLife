import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { PlantProps, EnvironmentProps } from '../../interfaces'
import api from '../../services/api'
import EnvironmentButton from '../../components/EnvironmentButton'
import Header from '../../components/Header'
import PlantCardPrimary from '../../components/PlantCardPrimary'
import Load from '../../components/Load'
import {
  Container,
  Text,
  SpotlightText,
  Section,
  FlatList,
  OtherStyles,
  Plants,
  View,
} from './styles'

const PlantSelect = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
  const [selectedEnvironment, setSelectedEnvironment] = useState('all')
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get(
        `plants_environments?_sort=title&_order=asc`
      )
      setEnvironments([
        {
          key: 'all',
          title: 'All',
        },
        ...data,
      ])
    }

    fetchEnvironment()
  }, [])

  useEffect(() => {
    fetchPlant()
  }, [])
  
  async function fetchPlant() {
    try {
      const { data } = await api.get(`plants?_sort=name&_order=asc`)
      if (!data) {
        setLoading(false)
        return
      }
      
      const plantsWithImages = data.map((plant: PlantProps) => ({
        ...plant,
        photo: plant.photo, 
      }))
  
      setPlants(plantsWithImages);
      setFilteredPlants(plantsWithImages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching plants:', error);
      setLoading(false);
    }
  }

  function handleSelectEnvironment(environmentKey: string) {
    setSelectedEnvironment(environmentKey);
  
    if (environmentKey === 'all') {
      setFilteredPlants(plants || []);
    } else {
      const filtered = (plants || []).filter((plant) =>
        plant.environments.includes(environmentKey)
      );
      setFilteredPlants(filtered);
    }
  }

  function handleSelectPlant(plant: PlantProps) {
    navigation.navigate('PlantSave', { plant })
  }

  if (loading) {
    return <Load />
  }

  return (
    <Container>
      <Header page="PlantSelect" />
      <Section>
        <SpotlightText>Which environment</ SpotlightText>
        <Text>would you prefer for your plant?</ Text>
      </ Section>
      <View>
        <FlatList
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              actived={selectedEnvironment === item.key}
              onPress={() => handleSelectEnvironment(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={OtherStyles.environmentList}
        />
      </ View>

      <Plants>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handleSelectPlant(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={OtherStyles.plantList}
        />
      </ Plants>
    </ Container>
  )
}

export default PlantSelect
