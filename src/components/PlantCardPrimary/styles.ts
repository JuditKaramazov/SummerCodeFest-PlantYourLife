import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  margin: 10px;
  align-items: center;
  background: ${colors.shape};
  padding: 20px 0;
`

export const Text = styled.Text`
  margin: 5px 16px;
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
`
