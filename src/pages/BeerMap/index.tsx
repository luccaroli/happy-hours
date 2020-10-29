import React, { useEffect, useState } from 'react'
import { StyleSheet, Dimensions, StatusBar, ScrollView, Image, Text, View } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Entypo, Ionicons, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'
import api from '../../services/api'

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

interface Providers {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  avatar: string;
  hours: string;
  beer: string;
  images: Array<{
    id: number;
    url: string;
  }>
}

const { width, height } = Dimensions.get('window')

const CARD_HEIGHT = 120;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

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
      <StatusBar animated barStyle="light-content" />

      { initialPosition[0] !== 0 && (
          <MapView
            showsUserLocation
            loadingEnabled
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
                tracksViewChanges={false}
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
        <Entypo name="list" size={20} color="#fff" />
        <ListIconText>Lista</ListIconText>
      </ListIconContainer>

      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      > 
       {providers.map(provider => (
         <View
          key={provider.id}
          style={styles.card}
         >
            <Image 
              resizeMode="cover"
              source={{ uri: provider.avatar}} 
              style={{ width: '100%', height: '100%', flex: 1.5,}}
            />

           <View style={styles.textContent}>
             <Text numberOfLines={1} style={styles.cardTitle}>{provider.name}</Text>

             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="clock" size={14} color="#ffc000" /> 
              <Text style={styles.cardHours}>{provider.hours}</Text>
            </View>

            <View style={styles.cardInfosContainer}>
              <Ionicons name="md-beer" size={14} color="#ffc000" /> 
              <Text numberOfLines={2} style={styles.cardBeer}>{provider.beer}</Text>
            </View>
           </View>
         </View>
       ))}
      </ScrollView>
    </Container>
  )
}
export default BeerMap

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    margin: 10,
  },

  card: {
    // padding: 10,
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: "#282828",
    borderRadius: 12,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  
  textContent: {
    flex: 2,
    padding: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#f4f4f4',
    marginBottom: 2,
  },

  cardHours: {
    fontSize: 12,
    color: "#f4f4f4",
    marginLeft: 5,
    fontFamily: 'Poppins_400Regular'
  },
  
  cardInfosContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8
    
  },

  cardBeer: {
    fontSize: 12,
    color: '#f4f4f4',
    marginLeft: 5,
  }
})

