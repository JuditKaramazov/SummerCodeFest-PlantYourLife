import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 10px;
  font-size: 40px;
`

export const Title = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`

type InputProps = {
  isFocused: Boolean
  isFailed: Boolean
}

export const Input = styled.TextInput<InputProps>`
  font-family: ${fonts.heading};
  font-size: 17px;
  text-align: center;
  border-bottom-color: ${(props) =>
    props.isFocused || props.isFailed ? colors.green : colors.gray};
  border-bottom-width: 1px;
  margin-bottom: 64px;
  padding: 1px 64px;
`
