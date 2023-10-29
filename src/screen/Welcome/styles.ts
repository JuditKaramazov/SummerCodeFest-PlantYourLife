import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 62px;
`

export const Title = styled.Text`
  color: ${colors.heading};
  font-family: 'Jost_400Regular';
  font-size: 32px;
  line-height: 34px;
  text-align: center;
  margin-bottom: -15px;
`

export const SubTitle = styled.Text`
  color: ${colors.heading};
  font-size: 16px;
  padding: 0 20px;
  text-align: center;
`

export const Image = styled.Image`
  width: 290px;
  height: 290px;
`

export const Touch = styled.TouchableOpacity`
  flex-direction: row;
  height: 60px;
  width: 130px;
  margin: 0;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
  background: ${colors.green};
  border-radius: 15px;
  padding: 0 20px;
`

export const ArrowIcon = styled(Feather)`
  color: #fff;
  font-size: 32px;
`
export const WelcomeButtonText = styled.Text`
  color: ${colors.white};
  margin-right: 5px;
  margin-left: 12px;
  font-size: 20px;
  font-weight: bold;
  font-family: ${fonts.heading};
`;

export const WelcomeDontShowWrapper = styled.TouchableOpacity`
  margin-top: 10px;
  justify-content: center;
`;

export const WelcomeDontShowText = styled.Text`
  font-size: 12px;
`;

