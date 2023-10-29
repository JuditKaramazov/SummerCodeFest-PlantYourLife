import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'
import { format } from 'date-fns'
import { PlantWithDateTimeProps, StoragePlantProps } from '../interfaces'

export async function savePlant(plant: PlantWithDateTimeProps): Promise<void> {
  try {
    const nextTime = new Date(plant.dateTimeNotification)
    const now = new Date()

    const { repeat_every, times } = plant.frequency

    if (repeat_every === 'week') {
      const interval = Math.trunc(7 / times)
      nextTime.setDate(now.getDate() + interval)
    } else {
      nextTime.setDate(now.getDate() + 1)
    }

    const secondsUntilNotification = Math.abs(
      Math.ceil((nextTime.getTime() - now.getTime()) / 1000)
    )

    const timeInterval = secondsUntilNotification < 60 ? 60 : secondsUntilNotification

    const notificationID = await Notifications.scheduleNotificationAsync({
      content: {
        title: '¡Hola, 🌱 carer!',
        body: `It is time to give your ${plant.name} some love!`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: { plant }
      },
      trigger: {
        seconds: timeInterval,
        repeats: true,
      }
    })

    const data = await AsyncStorage.getItem('@plantyourlife:plants')
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {}

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationID,
      },
    }

    await AsyncStorage.setItem(
      '@plantyourlife:plants',
      JSON.stringify({ ...newPlant, ...oldPlants })
    )
  } catch {
    throw new Error("An error occurred while saving your plant!")
  }
}

export async function deletePlant(id: string): Promise<void> {
  const data = await AsyncStorage.getItem('@plantyourlife:plants')
  const plants = data ? (JSON.parse(data) as StoragePlantProps) : {}

  await Notifications.cancelScheduledNotificationAsync(
    plants[id].notificationID
  )

  delete plants[id]

  await AsyncStorage.setItem('@plantyourlife:plants', JSON.stringify(plants))
}

export async function getPlants(): Promise<PlantWithDateTimeProps[]> {
  try {
    const data = await AsyncStorage.getItem('@plantyourlife:plants')
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {}

    const plantsSorted = Object.keys(plants)
      .map((plant) => {
        const plantData = plants[plant]?.data;
        if (plantData && plantData.dateTimeNotification) {
          return {
            ...plantData,
            hour: format(
              new Date(plantData.dateTimeNotification),
              'HH:mm'
            ),
          }
        }
        return null; 
      })
      .filter((plant) => plant !== null)
      .sort((a, b) =>
        Math.floor(
          new Date(a!.dateTimeNotification).getTime() / 1000 -
            Math.floor(new Date(b!.dateTimeNotification).getTime() / 1000)
        )
      )

    return plantsSorted.filter((plant) => plant !== null) as PlantWithDateTimeProps[];
  } catch {
    throw new Error("We couldn't retrieve your plant at this moment.")
  }
}

export async function clearPlants(): Promise<void> {
  try {
    await AsyncStorage.removeItem('@plantyourlife:plants')
    await Notifications.cancelAllScheduledNotificationsAsync()
  } catch {
    throw new Error("An error occurred. Please, try again.")
  }
}

