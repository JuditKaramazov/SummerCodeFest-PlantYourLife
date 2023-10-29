import React, { useState, useEffect } from "react"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage"
import AuthRoutes from './tabs.routes'
import Welcome from '../screen/Welcome'
import Identification from '../screen/Identification'
import Confirmation from '../screen/Confirmation'
import PlantSave from '../screen/PlantSave'
import About from "../screen/About"
import colors from '../styles/colors'

const AppStack = createStackNavigator()

const Routes: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState<string | null>()

  useEffect(() => {
      async function getWelcome() {
          const welcome = await AsyncStorage.getItem("@plantyourlife:hideWelcome")
          setShowWelcome(welcome)
      }

      getWelcome()
  }, [])

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.white,
          },
        }}
        initialRouteName={showWelcome !== "1" ? "" : "Welcome"}
      >
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen
          name="Identification"
          component={Identification}
        />
        <AppStack.Screen name="Confirmation" component={Confirmation} />
        <AppStack.Screen name="PlantSelect" component={AuthRoutes} />
        <AppStack.Screen name="PlantSave" component={PlantSave} />
        <AppStack.Screen name="MyPlants" component={AuthRoutes} />
        <AppStack.Screen name="About" component={About} />
      </ AppStack.Navigator>
    </ NavigationContainer>
  )
}

export default Routes
