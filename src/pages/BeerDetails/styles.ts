import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
 flex: 1;
 background: #4F4F4F;
`;

export const ImagesContainer = styled.View`
  height: 240px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2);
`

export const DetailsContainer = styled.View`
  padding: 24px;
`
export const Title = styled.Text`
  color: #f2f2f2;
  font-size: 29px;
  font-family: 'Archivo_700Bold';
`
export const Description = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #f2f2f2;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const AddressContainer = styled.View`
  align-items: center;
  padding: 20px;
`
export const Addresss = styled.Text`
  text-align: center;
  margin-top: 11px;
  font-family: 'Poppins_400Regular';
  color: #f2f2f2;
  opacity: 0.5;
`

export const MapContainer = styled.View`  
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #ffc000;
  margin-top: 40px;
  background: #ffc000;
`
export const RoutesContainer = styled(RectButton)`
  padding: 16px;
  align-items: center;
  justify-content: center;
`
export const RoutesText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #282828;
`