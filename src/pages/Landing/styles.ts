import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #282828;
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  background: #FFC000;
`
export const Logo = styled.Image`
`
export const LogoText = styled.Text`
  font-size: 30px;
  color: #fff;
  font-family: 'Poppins_800ExtraBold';
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.13);
  margin-bottom: 58px;
;

`
export const ImageLanding = styled.Image`
  position: absolute;
`
export const LandingContainer = styled.View`
  align-items: center;
  justify-content: center;
  top: -28px;
`

export const ContainerDescription = styled.View`
  flex: 1;
  width: 100%;
  padding: 32px;
  justify-content: center;
  margin-top: 28px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins_400Regular';
  color: #fff;
`
export const Description = styled.Text`
  font-size: 20px;
  margin-top: 12px;
  font-family: 'Poppins_600SemiBold';
  color: #fff;
`
export const Button = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 20px;
  background: #ffc900;
  right: 28px;
  bottom: 28px;
`

