import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import beerImg from '../../images/beer.png'
import landingImg from '../../images/landing.png'


import { 
  Container,
  LogoContainer,
  Logo,
  LandingContainer,
  ContainerDescription,
  LogoText,
  ImageLanding,
  Title,
  Description,
  Button,
 } from './styles';

const Landing = () => {
  const navigation = useNavigation()

  function handleNavigateToBeerList() {
    navigation.navigate('BeerList')
  }

  return (
    <Container>
      <LogoContainer>
        <Logo source={beerImg} />
        <LogoText>Happy Hours</LogoText>
      </LogoContainer>

      <LandingContainer>
        <ImageLanding source={landingImg} />
      </LandingContainer>

      <ContainerDescription>
        <Title>Seja bem-vindo.</Title>
        <Description>Encontre os melhores{'\n'}chopps da cidade pelo{'\n'}menor preço.</Description>

        <Button onPress={handleNavigateToBeerList}>
          <Feather name="arrow-right" size={20} color="#282828" />
        </Button>
      </ContainerDescription>
    </Container>
  )
}

export default Landing;
