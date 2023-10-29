import React from 'react'
import styled from 'styled-components/native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

type Props = {
  title: string
  disabled?: boolean
  onPress?: () => void
}

const Button = ({ title, disabled, ...rest }: Props) => {
  return (
    <Container disabled={disabled} activeOpacity={0.7} {...rest}>
      <Text>{title}</Text>
    </ Container>
  )
}

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: ${colors.green};
  border-radius: 16px;
  padding: 20px 55px;

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
  `}
`

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 17px;
  font-weight: bold;
  font-family: ${fonts.heading};
`

export default Button
