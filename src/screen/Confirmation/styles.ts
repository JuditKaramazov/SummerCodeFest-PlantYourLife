import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 62px;
`

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  margin-bottom: 32px;
  align-items: center;
`

export const Emoji = styled.Text`
  font-size: 64px;
`

export const Title = styled.Text`
  margin-bottom: 32px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`

export const Text = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 18px;
  text-align: center;
`
