import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background: #4F4F4F;
  align-items: center;
`;

export const SelectContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 34px;
  padding: 0 15px;
`

export const InputContainer = styled.View`
  width: 90%;
`

export const CardContainer = styled.ScrollView`
  margin-top: -40px;
`
export const CardContent = styled(RectButton)`
  background: #282828;
  flex-direction: row;
  border-radius: 10px;
  padding: 20px 30px;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2);

`
export const CardImage = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  margin-right: 10px;
  right: 10px;
`

export const CardImageContainer = styled.View`
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2);
`

export const CardInfoContainer = styled.View`
  width: 70%;
`

export const CardTitleContainer = styled.View`
  margin-bottom: 6px;
`

export const CardTitle = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 18px;
  color: #fff;
`
export const CardBeer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`
export const CardBeerDescription = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab_400Regular';
  left: 8px;
`
export const CardHour = styled.View`
  flex-direction: row;
  align-items: center;

`
export const CardHourDescription = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab_400Regular';
  left: 8px;

`

export const MapIconContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  padding: 14px;
  width: 120px;
  background: #282828;
  margin-bottom: 18px;
  opacity: 0.8;
`
export const MapIconText = styled.Text`
  font-family: 'Poppins_600SemiBold';
  color: #fff;
  margin-right: 8px;
  
`