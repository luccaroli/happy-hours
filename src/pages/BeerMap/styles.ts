import { Animated } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const CalloutContainer = styled.View`
  width: 170px;
  padding: 12px;
  background: rgba(255, 192, 0, 0.8);
  border-radius: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CalloutImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`

export const CalloutText = styled.Text`
  flex: 1;
  color: #282828;
  font-size: 14px;
  font-family: 'Poppins_600SemiBold';
  text-align: center;
`
export const ListIconContainer = styled(RectButton)`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  padding: 14px;
  width: 90px;
  background: #ffc000;
  opacity: 0.8;
  bottom: 23%;
`
export const ListIconText = styled.Text`
  font-family: 'Poppins_600SemiBold';
  color: #282828;
  margin-left: 2px;
`