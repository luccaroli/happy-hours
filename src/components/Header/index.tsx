import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import beerImg from '../../images/beer.png'
import { TopBar, Button, ImageBeer } from './styles';

const Header = () => {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
      <TopBar>
        <Button onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color="#282828" />
        </Button>

        <ImageBeer source={beerImg} />
      </TopBar>
  )
}

export default Header;