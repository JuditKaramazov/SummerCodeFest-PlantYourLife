import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  background: ${colors.blue_light};
  padding-top: 64px;
`

export const Section = styled.View`
  flex: 1;
  margin-top: 10px;
  align-items: center;
  background: ${colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0 30px;
`

export const Image = styled.Image``

export const TipContainer = styled.View`
  background: ${colors.blue_light};
  border-radius: 20px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin-top: 20px;
  margin-bottom: 52px;
`

export const TipText = styled.Text`
  color: ${colors.blue};
  font-family: ${fonts.text};
  text-align: center;
  line-height: 20px;
  max-width: 170px;
`

export const Title = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.complement};
  font-size: 24px;
  align-self: flex-start;
`

export const FlatList = styled.FlatList`
  width: 100%;
  margin-top: 24px;
`
