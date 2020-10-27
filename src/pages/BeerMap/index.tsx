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

const BeerMap: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0])


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

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

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
        <Marker  
          icon={mapMarkerImg}
          coordinate={{
            latitude: -1.430311,
            longitude: -48.446257,
          }}
          calloutAnchor={{
            x: 0.5,
            y: -0.2,
          }}
        >
          <Callout tooltip onPress={() => {}}>
            <CalloutContainer>
              <CalloutImage source={{ uri: 'https://scontent.fbel5-1.fna.fbcdn.net/v/t1.0-9/120384638_3416916971701102_5980690203222777634_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=u4SGeWDhBV4AX8aBR1X&_nc_ht=scontent.fbel5-1.fna&oh=18603c666f834c64ddcb8562bdc59116&oe=5FBB24EF' }} />
              <CalloutText numberOfLines={2}>Lucas Pub</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>


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