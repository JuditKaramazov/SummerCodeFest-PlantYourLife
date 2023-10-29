import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import PlantSelect from '../screen/PlantSelect'
import MyPlants from '../screen/MyPlants'
import colors from '../styles/colors'

const AppTab = createBottomTabNavigator()

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'New Plant') {
            iconName = focused ? 'add-circle-outline' : 'add-circle-outline'
          } else if (route.name === 'My Plants') {
            iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted'
          }

          return <MaterialIcons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.heading,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          paddingHorizontal: 20,
          alignItems: 'center',
          height: 88,
        }
      })}
    >
      <AppTab.Screen name="New Plant" component={PlantSelect} />
      <AppTab.Screen name="My Plants" component={MyPlants} />
    </ AppTab.Navigator>
  )
}

export default AuthRoutes
