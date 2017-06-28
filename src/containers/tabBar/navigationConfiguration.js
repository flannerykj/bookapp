import {TabNavigator} from 'react-navigation'

import HomeTabNavigation from '../homeTab/views/HomeTabNavigation'
import MyBooksTabNavigation from '../myBooksTab/views/MyBooksTabNavigation'

const routeConfiguration = {
	HomeTabNavigation: { screen: HomeTabNavigation },
	MyBooksTabNavigation: {screen: MyBooksTabNavigation },
}

const tabBarConfiguration = {
  //...other configs
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
// background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
}

export const tabBarReducer = (state,action) => {
	if (action.type === 'JUMP_TO_TAB') {
		return {...state, index:0}
	} else {
		return TabBar.router.getStateForAction(action,state)
	}
}

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration)