import React, {Component} from 'react';
import {TabBar} from '../navigationConfiguration'
import {addNavigationHelpers} from 'react-navigation'
import {connect} from 'react-redux'

mapStateToProps = (state) => {
	return {
		navigationState: state.tabBar
	}
}

class TabBarNavigation extends Component {
	render() {
		const {dispatch, navigationState} = this.props
		return (
			<TabBar
				navigation={
					addNavigationHelpers({
						dispatch: dispatch,
						state: navigationState,
					})
				}
			/>
		  )
		}
	}

export default connect(mapStateToProps)(TabBarNavigation)