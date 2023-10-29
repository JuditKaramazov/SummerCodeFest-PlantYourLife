import React, { useState } from 'react'
import { Platform, Alert, Image } from 'react-native'
import { isBefore, format } from 'date-fns'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { PlantProps, PlantWithDateTimeProps } from '../../interfaces'
import { getPlants, savePlant } from '../../libs/storage'
import WaterDropIcon from '../../../assets/waterdrop.png'
import Button from '../../components/Button'
import {
  ScrollView,
  Container,
  Header,
  Title,
  Description,
  TipContainer,
  TipImage,
  TipText,
  ScheduleContainer,
  ScheduleLabel,
  Section,
  DataTimePickerButton,
  DataTimePickerButtonText,
} from './styles'

type RouteParams = {
  plant: PlantProps
}

const PlantSave = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(
    Platform.OS === 'ios'
  )

  const navigation = useNavigation()
  const route = useRoute()

  const { plant } = route.params as RouteParams

  function handleChangeTime(
    event: Event,
    dateTime: Date | undefined
  ) {
    if (Platform.OS === 'android') {
      setShowDatePicker((oldValue) => !oldValue)
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('⚠️ Please', 'Select a future date!')
    }

    if (dateTime) setSelectedDateTime(dateTime)
  }

  function openDataTimerPicker() {
    setShowDatePicker(true)
  }

  async function handleSavePlant() {
    try {
      const plantWithDateTime: PlantWithDateTimeProps = {
        ...plant,
        dateTimeNotification: selectedDateTime,
        hour: format(selectedDateTime, 'HH:mm')
      }

      await savePlant(plantWithDateTime)

      navigation.navigate('Confirmation', {
        title: 'Noted!',
        subTitle:
          'Now, do not worry; we will take care of the rest!',
        buttonTitle: 'Go back',
        icon: 'noted',
        nextPage: 'MyPlants',
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        width: '100%',
        height: '100%',
      }}
    >
      <Container>
        <Header>
          <Image source={{ uri: plant.photo }} style={{ height: 90, width: 90, marginBottom: -10, resizeMode: 'contain' }} />
          <Title>{plant.name}</ Title>
          <Description>{plant.about}</ Description>
        </ Header>

        <Section>
          <TipContainer>
            <TipImage source={WaterDropIcon} />
            <TipText>{plant.water_tips}</ TipText>
          </ TipContainer>

          <ScheduleContainer>
            <ScheduleLabel>Choose the best watering time:</ ScheduleLabel>
            {showDatePicker && (
              <DateTimePicker
                value={selectedDateTime}
                mode="time"
                display="spinner"
                onChange={handleChangeTime}
              />
            )}
            {Platform.OS === 'android' && (
              <DataTimePickerButton onPress={openDataTimerPicker}>
                <DataTimePickerButtonText>
                  Change 🕑 {format(selectedDateTime, 'HH:mm')}
                </ DataTimePickerButtonText>
              </ DataTimePickerButton>
            )}
          </ ScheduleContainer>
          <Button title="Save plant" onPress={handleSavePlant} />
        </ Section>
      </ Container>
    </ ScrollView>
  )
}

export default PlantSave
