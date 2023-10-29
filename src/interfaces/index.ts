export interface PlantProps {
  id: number
  name: string
  about: string
  water_tips: string
  photo: string
  environments: string[]
  frequency: {
    times: number
    repeat_every: string
  }
}

export type EnvironmentProps = {
  key: string
  title: string
}

export interface PlantWithDateTimeProps extends PlantProps {
  dateTimeNotification: Date
  hour: string
}

export interface StoragePlantProps {
  [id: string]: {
    data: PlantWithDateTimeProps
    notificationID: string
  }
}
