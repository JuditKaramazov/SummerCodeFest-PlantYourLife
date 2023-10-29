import styled from 'styled-components/native'
import colors from '../../styles/colors'

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
`

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  margin-bottom: 5px;
  padding: 0 20px;
  color: ${colors.heading};
`

export const AboutLogOffWrapper = styled.TouchableOpacity`
  margin-top: 25px;
  justify-content: center;
`;

export const AboutLogOff = styled.Text`
  font-size: 12px;
`;
