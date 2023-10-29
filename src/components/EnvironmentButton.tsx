import React from 'react'
import styled from 'styled-components/native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface EnvironmentButtonProps extends RectButtonProps {
  title: string
  actived?: boolean
}

const EnvironmentButton = ({
  title,
  actived,
  ...rest
}: EnvironmentButtonProps) => {
  return (
    <Container actived={actived} {...rest}>
      <Text actived={actived}>{title}</Text>
    </Container>
  )
}

type DefaultProps = {
  actived?: boolean
}

const Container = styled(RectButton)<DefaultProps>`
  width: 76px;
  height: 40px;
  margin-right: 8px;
  border-radius: 8px;
  background: ${(props) => (props.actived ? colors.green_light : colors.shape)};
  align-items: center;
  justify-content: center;
`

const Text = styled.Text<DefaultProps>`
  color: ${(props) => (props.actived ? colors.green_dark : colors.heading)};
  font-family: ${(props) => (props.actived ? fonts.complement : fonts.heading)};
`

export default EnvironmentButton
