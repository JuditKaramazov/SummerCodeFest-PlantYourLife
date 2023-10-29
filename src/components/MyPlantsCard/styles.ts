import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 80px;
  margin-bottom: 12px;
  background: ${colors.shape};
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`

export const Name = styled.Text`
  color: ${colors.body_dark};
  align-items: center;
  margin-left: 18px;
  font-family: ${fonts.complement};
  font-size: 15px;
`

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Hour = styled.View``

export const Text = styled.Text`
  color: ${colors.body_light};
  align-items: center;
  font-family: ${fonts.complement};
  font-size: 13px;
`

export const Time = styled.Text`
  color: ${colors.body_dark};
  text-align: right;
  font-family: ${fonts.complement};
  font-size: 13px;
`

export const ButtonRemoveContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const ButtonRemove = styled(RectButton)`
  width: 100px;
  height: 80px;
  position: relative;
  right: 20px;
  align-items: center;
  background: ${colors.red};
  border-radius: 20px;
  justify-content: center;
`
