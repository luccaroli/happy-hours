import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Header = styled.View`
  width: 100%;
  height: 50%;
  background: #FFC000;
  align-items: center;
  justify-content: flex-start;
  padding: 35px 0;
`

export const TopBar = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 89.1%;
  height: 34px;
`

export const Button = styled(RectButton)`

`
export const Image = styled.Image`

`

export const HappyFilter = styled.View`
  flex: 1;
  justify-content: space-around;
  width: 90%;
  left: 22px;
`

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #282828;
  font-size: 24px;
  line-height: 32px;
  top: 12px;
` 
