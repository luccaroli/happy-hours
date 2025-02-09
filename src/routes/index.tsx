import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing';
import BeerList from '../pages/BeerList';
import BeerDetails from '../pages/BeerDetails';
import Header from '../components/Header';
import BeerMap  from '../pages/BeerMap'

const { Navigator, Screen } = createStackNavigator()

const routes = () => {
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false, 
          }} 
        >
          <Screen name="Landing" component={Landing} />
          <Screen name="BeerList" component={BeerList} />
          <Screen name="BeerMap" component={BeerMap} />

          <Screen 
            name="BeerDetails" 
            component={BeerDetails} 
            options={{
              headerShown: true,
              header: () => <Header />
            }}
          />

      </Navigator>
    </NavigationContainer>
  )
}
export default routes;