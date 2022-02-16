import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

const Centerer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const TextBold = styled.Text`
  font-family: 'open-bold';
`

export const AboutScreen = ({}) => {
  return (
    <Centerer>
      <Text>Это лучшее приложение для личных заметок.</Text>
      <Text>
        Версия приложения <TextBold>1.0.0</TextBold>
      </Text>
    </Centerer>
  )
}

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'О приложении',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})
