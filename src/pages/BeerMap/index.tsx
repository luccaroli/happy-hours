import React, { useEffect, useState } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'

import mapMarkerImg from '../../images/beer.png'
import mapStyleDark from '../../utils/map-dark-mode'


import { 
  Container, 
  CalloutContainer, 
  CalloutText, 
  ListIconContainer, 
  ListIconText,
  CalloutImage,
} from './styles'
import api from '../../services/api'

interface Providers {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  avatar: string;
}

const BeerMap: React.FC = () => {
  const [providers, setProviders] = useState<Providers[]>([])
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0])
  const navigation = useNavigation()


  useEffect(() => {
    async function loandPosition() {
      const { status } = await Location.requestPermissionsAsync()

      if (status !== 'granted') {
        alert('Oooopa, precisamos da sua permisão para obter a localização')
        return
      }

      const location = await Location.getCurrentPositionAsync()
      const {latitude, longitude} = location.coords

      setInitialPosition([
        latitude,
        longitude
      ])
    }
    
    loandPosition()
  }, [])

  function handleGoBack() {
    navigation.goBack()
  }

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data)
    })
  }, [])

  return (
    <Container>
      
      { initialPosition[0] !== 0 && (
        <MapView
        customMapStyle={mapStyleDark}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: initialPosition[0],
          longitude: initialPosition[1],
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      > 
        {providers.map(provider => {
          return (
            <Marker  
              key={provider.id}
              icon={mapMarkerImg}
              coordinate={{
                latitude: provider.latitude,
                longitude: provider.longitude,
              }}
              calloutAnchor={{
                x: 0.5,
                y: -0.2,
              }}
            >
              <Callout tooltip onPress={() => {}}>
                <CalloutContainer>
                  <CalloutImage source={{ uri: provider.avatar }} />
                  <CalloutText numberOfLines={2}>{provider.name}</CalloutText>
                </CalloutContainer>
              </Callout>
        </Marker>
          )
        })}


      </MapView>
      )}

      <ListIconContainer onPress={handleGoBack}>
        <ListIconText>Lista</ListIconText>
        <Entypo name="list" size={20} color="#fff" />
      </ListIconContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})

export default BeerMap