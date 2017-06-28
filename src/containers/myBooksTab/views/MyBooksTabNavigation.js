'use strict'
// React
import React from 'react'
// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorMyBooksTab } from '../navigationConfiguration'
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
  navigationState: state.myBooksTab
  }
}
class MyBooksTabNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'MyBooksTab',
  }

render(){
    const { dispatch, navigationState} = this.props
return (
      <NavigatorMyBooksTab
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

export default connect(mapStateToProps)(MyBooksTabNavigation)
