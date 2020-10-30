import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { StyleSheet, Image, ScrollView, Dimensions, View, Linking, StatusBar } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import iconLoading from '../../images/loading.json'

import api from '../../services/api';

import mapStyleDark from '../../utils/map-dark-mode'

import mapMarkerImg from '../../images/beer.png'

import { 
  Container, 
  ImagesContainer,
  DetailsContainer,
  Title,
  Description,
  AddressContainer,
  Addresss,
  MapContainer,
  RoutesContainer,
  RoutesText,
} from './styles';


interface BeerDetailsRouteParams {
  id: number;
}

interface Provider {
  id: string;
  name: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  images: Array<{
    id: number;
    url: string;
  }>

}

const BeerDetails = () => {
  const [provider, setProvider] = useState<Provider>()

  const route = useRoute()
  const params = route.params as BeerDetailsRouteParams

  useEffect(() => {
    api.get(`providers/${params.id}`).then(response => {
      setProvider(response.data)
    })
  }, [params.id])

  function handleGoogleMapsRoutes() {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${provider?.latitude},${provider?.longitude}`)
  }

  if (!provider) {
    return (
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',  
        backgroundColor: '#4f4f4f'
        }}
      >
         <LottieView 
          style={{ width: 300, height: 300 }}
          source={iconLoading}
          resizeMode="contain"
          autoPlay
          loop
          autoSize
        />
      </View>
    )
  }

  return (
    <Container>
      <StatusBar animated barStyle="dark-content" />

      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {provider.images.map(image => {
            return (
              <Image 
              key={image.id}
              style={styles.image} 
              source={{ uri: image.url }} 
              />
            )
          })}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{provider.name}</Title>
        <Description>{provider.description}</Description>

        <AddressContainer style={{
          borderBottomWidth: 1,
          borderBottomColor: "#282828",
        }} >
          <Feather name="map-pin" size={24} color="#ffc000" />
          <Addresss>{provider.address}</Addresss>
        </AddressContainer>

        <MapContainer>
          <MapView 
            customMapStyle={mapStyleDark}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: provider.latitude,
              longitude: provider.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: provider.latitude,
                longitude: provider.longitude,
              }}
            />
          </MapView>

          <RoutesContainer onPress={handleGoogleMapsRoutes}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>
      
      </DetailsContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },

  mapStyle: {
    width: '100%',
    height: 150,
  },
})

export default BeerDetails;