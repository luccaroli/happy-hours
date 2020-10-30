import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather, Ionicons, Entypo } from '@expo/vector-icons'
import { View, StyleSheet, Text } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import LottieView from 'lottie-react-native';

import api from '../../services/api'

import beerLoading from '../../images/beer.json'

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
  hours: string;
  week_days: Array<{
    day: string;
  }>;
}

const BeerList = () => {
  const [providers, setProviders] = useState<Provider[]>([])
  const [week_days, setWeekDays] = useState([])
  const [loanding, setLoading] = useState(true)


  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data)
      setTimeout(() => {
        setLoading(!loanding)
      }, 2000);
    })
  }, [])

  async function handleSubmit() {

    const response = await api.get(`/providers/?week_days_like=${week_days}`)
    
    setProviders(response.data)
  }

  const navigation = useNavigation()

  function handleNavigateToBeerDetails(id: number) {
    navigation.navigate('BeerDetails', { id })
  }

  function handleNavigateToBeerMap() {
    navigation.navigate('BeerMap')
  }

  if (loanding) {
    return (
      <View 
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffc000' }}>
        <LottieView 
          style={{ width: 300, height: 300 }}
          source={beerLoading}
          resizeMode="contain"
          autoPlay
          loop
          autoSize
        />
        <Text
          style={{
            fontFamily: 'Poppins_600SemiBold',
            color: '#282828'
          }}
        >
          Carregando seus pubs...
        </Text>
      </View>
    )
  } 
  else {

    return (
      <Container>
        <PageHeader>
          <SelectContainer>
            <Feather name="filter" color="#282828" size={24} />
            <InputContainer>
              <RNPickerSelect
                onDonePress={handleSubmit}
                doneText="Buscar"
                style={pickerSelectStyles}
                Icon={() => {
                  return (
                    <Feather name="chevron-down" color="#282828" size={24} />
                  )
                }}
                placeholder={{ label: 'Filtrar por dia' }}
                onValueChange={(value) => setWeekDays(value)}
                items={[
                    { label: 'Domingo', value: 0 },
                    { label: 'Segunda', value: 1 },
                    { label: 'Terça', value: 2 },
                    { label: 'Quarta', value: 3 },
                    { label: 'Quinta', value: 4 },
                    { label: 'Sexta', value: 5 },
                    { label: 'Sábado', value: 6 },
                ]}
              />
            </InputContainer>
          </SelectContainer>
        </PageHeader>
        
        <CardContainer 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
            maxWidth: "100%"
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

                <CardInfoContainer >
                  <CardTitleContainer>
                    <CardTitle>{provider.name}</CardTitle>
                  </CardTitleContainer>

                  <CardBeer >
                    <Ionicons 
                      name="md-beer" 
                      size={14} 
                      color="#ffc000" 
                    />
                    <CardBeerDescription numberOfLines={2}>
                      {provider.beer}
                    </CardBeerDescription>
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
    )}
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