import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather, Ionicons, Entypo } from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

import api from '../../services/api'

import PageHeader from '../../components/PageHeader'

import { 
  Container, 
  CardContainer,
  CardImage,
  CardImageContainer,
  CardContent,
  CardTitle,
  CardBeer,
  CardInfoContainer,
  CardBeerDescription,
  CardHour,
  CardHourDescription,
  CardTitleContainer,
  SelectContainer,
  InputContainer,
  MapIconContainer,
  MapIconText,
} from './styles';

interface Provider {
  id: number;
  name: string;
  avatar: string;
  beer: string;
  hours: string
  week_days: Array<{
    id: number;
    day: number;
  }>
}

const BeerList = () => {
  const [providers, setProviders] = useState<Provider[]>([])

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data)
    })
  }, [])
  

  const navigation = useNavigation()

  function handleNavigateToBeerDetails(id: number) {
    navigation.navigate('BeerDetails', { id })
  }

  function handleNavigateToBeerMap() {
    navigation.navigate('BeerMap')
  }

  return (
    <Container>
      <PageHeader />
    
      <SelectContainer>

        <Feather name="filter" color="#282828" size={24} />
        <InputContainer>
          <RNPickerSelect
            style={pickerSelectStyles}
            Icon={() => {
              return (
                <Feather name="chevron-down" color="#282828" size={24} />
              )
            }}
            placeholder={{ label: 'Filtrar por dia, hora'  }}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Domingo', value: 'domingo' },
                { label: 'Segunda', value: 'segunda' },
                { label: 'Terça', value: 'terça' },
                { label: 'Quarta', value: 'Quarta' },
                { label: 'Quinta', value: 'Quinta' },
                { label: 'Sexta', value: 'Sexta' },
                { label: 'Sábado', value: 'Sábado' },
            ]}
          />
        </InputContainer>
      </SelectContainer>
      
      <CardContainer contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
        }}
      >
      {providers.map(provider => {
        return (
          <CardContent  key={provider.id} onPress={() => handleNavigateToBeerDetails(provider.id)}>
            <View 
              style={{ 
                width: 2, 
                height: 80, 
                backgroundColor: "#ffc000", 
                left: -29.8 
              }}
            />
            <CardImageContainer>
              <CardImage 
                source={{ uri: provider.avatar }} 
              />
            </CardImageContainer>

            <CardInfoContainer>
              <CardTitleContainer>
                <CardTitle>{provider.name}</CardTitle>
              </CardTitleContainer>

              <CardBeer>
                <Ionicons 
                  name="md-beer" 
                  size={14} 
                  color="#ffc000" 
                />
                <CardBeerDescription>{provider.beer}</CardBeerDescription>
              </CardBeer>
              
              <CardHour>
                <Feather 
                  name="clock" 
                  size={14} 
                  color="#ffc000" 
                />
                <CardHourDescription>{provider.hours}</CardHourDescription>
              </CardHour>
            </CardInfoContainer>
          </CardContent>
        )
      })}
      </CardContainer>
      
      <MapIconContainer onPress={handleNavigateToBeerMap}>
        <MapIconText>Mapa</MapIconText>
        <Entypo name="map" size={20} color="#fff" />
      </MapIconContainer>

    </Container>
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 60,
    color: '#282828',
    backgroundColor: 'transparent',
    marginBottom: 8,
    paddingHorizontal: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#282828",
    fontSize: 16,
  },

  placeholder: {
    color: "#282828",
    opacity: 0.7,
  },

  iconContainer: {
    top: 20,
  }
})

export default BeerList;