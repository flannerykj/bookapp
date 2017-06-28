'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import MyBooksTabScreenOne from './views/MyBooksTabScreenOne'
import MyBooksTabScreenTwo from './views/MyBooksTabScreenTwo'

const routeConfiguration = {
  MyBooksTabScreenOne: { screen: MyBooksTabScreenOne },
  MyBooksTabScreenTwo: { screen: MyBooksTabScreenTwo },
}
// going to disable the header for now

const stackNavigatorConfiguration = {
  initialRoute: 'MyBooksTabScreenOne'
}

export const NavigatorMyBooksTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
