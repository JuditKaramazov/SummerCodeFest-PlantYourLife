import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  background: ${colors.green_light};
  padding-top: 64px;
`

export const Text = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 17px;
  line-height: 18px;
`

export const SpotlightText = styled.Text`
  color: ${colors.heading};
  margin-top: 20px;
  font-family: ${fonts.complement};
  font-size: 17px;
`

export const Section = styled.View`
  background-color: ${colors.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 10px;
  padding: 0 30px;
`

export const View = styled.View`
  background-color: ${colors.background};
`

export const FlatList = styled.FlatList`
  background-color: ${colors.background};
`

export const Plants = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${colors.background};
  padding: 0 32px;
`

export const OtherStyles = StyleSheet.create({
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plantList: {},
})
