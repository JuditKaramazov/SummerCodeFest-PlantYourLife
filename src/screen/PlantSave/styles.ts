import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const ScrollView = styled.ScrollView`
  flex: 1;
`

export const Container = styled.View`
  flex: 1;
  background: ${colors.shape};
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
`

export const FeatherIcons = styled(Feather)``

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 62px;
  padding-bottom: 32px;
`

export const Title = styled.Text`
  margin-top: 24px;
  margin-bottom: 18px;
  color: ${colors.heading};
  font-family: ${fonts.complement};
  font-size: 22px;
  text-align: center;
`

export const Description = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 16px;
  line-height: 25px;
  text-align: center;
`

export const TipImage = styled.Image``

export const Section = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 64px;
  align-items: center;
  justify-content: space-between;
  background: ${colors.white};
  padding-bottom: 32px;
`

export const TipContainer = styled.View`
  flex-direction: row;
  width: 320px;
  position: relative;
  bottom: 60px;
  background: ${colors.blue_light};
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const TipText = styled.Text`
  max-width: 170px;
  color: ${colors.blue};
  font-family: ${fonts.text};
  line-height: 20px;
  text-align: center;
`

export const ScheduleContainer = styled.View`
  margin-top: -15px;
  align-items: center;
`

export const ScheduleLabel = styled.Text`
  color: ${colors.body_dark};
  font-family: ${fonts.complement};
  font-size: 13px;
  text-align: center;
`

export const DataTimePickerButton = styled.TouchableOpacity`
  width: 90%;
  margin: 16px 0px;
  background: ${colors.blue_light};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  padding: 12px;
`
export const DataTimePickerButtonText = styled.Text`
  color: ${colors.blue};
  font-family: ${fonts.complement};
  font-size: 17px;
`
