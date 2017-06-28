'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorHomeTab } from '../navigationConfiguration'
import AddBook from '../../../components/AddBook';

// Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
  navigationState: state.homeTab
  }
}

class HomeTabNavigation extends React.Component {
  static navigationOptions = {
    title: 'Home Tab',
    tabBarLabel: 'Home Tab',
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorHomeTab
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(HomeTabNavigation)
