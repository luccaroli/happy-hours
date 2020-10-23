import React from 'react';
import { Feather } from '@expo/vector-icons'
import { StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

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


const BeerDetails = () => {
  return (
    <Container>
     

      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          <Image style={styles.image} source={{ uri: 'https://www.spub.com.br/wp-content/uploads/elementor/thumbs/6b17a3a3-9ec3-4298-b73d-1285e81e58bd-oopbxwc40bfgzei592g6i52xh9jblre6ylq91laxco.jpg' }} />
          <Image style={styles.image} source={{ uri: 'https://www.spub.com.br/wp-content/uploads/elementor/thumbs/Studio-Pub-Pizza01-ooiiwmetr7rntfwdb0txj5qi8whccxjhhcc5zop36g.jpg' }} />
          <Image style={styles.image} source={{ uri: 'https://www.spub.com.br/wp-content/uploads/elementor/thumbs/StudioPub-Drink01--ooiiwp8cbpvis9s9uk1t8n0w123g00uohqamfikwns.jpg' }} />
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>Studio Pub Belém</Title>
        <Description>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</Description>

        <AddressContainer style={{
          borderBottomWidth: 1,
          borderBottomColor: "#282828",
        }} >
          <Feather name="map-pin" size={24} color="#ffc000" />
          <Addresss>R. Pres. Pernambuco, 277 - Batista Campos, Belém - PA, 66015-200</Addresss>
        </AddressContainer>

        <MapContainer>
          <MapView 
            customMapStyle={mapStyleDark}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: -27.2092052,
              longitude: -49.6401092,
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
                latitude: -27.2092052,
                longitude: -49.6401092
              }}
            />
          </MapView>

          <RoutesContainer>
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