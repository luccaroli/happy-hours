import React from 'react';
import { Feather  } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native';


import beerImg from '../../images/beer.png'

import { 
  TopBar,
  Header,
  Button,
  Image,
  Title,
  HappyFilter,
} from './styles'



const PageHeader: React.FC = ({ children }) => {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Header>
      <TopBar>
        <Button onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color="#282828" />
        </Button>

        <Image source={beerImg} />
      </TopBar>

      <HappyFilter>
        <Title>Happy Hours{'\n'}Disponíveis na cidade</Title>
        <View />
      </HappyFilter>

      {children}
    </Header>
  )
}



export default PageHeader;