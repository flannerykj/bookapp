'use strict'
import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import AddBook from '../../../components/AddBook'
import * as bookActions from '../../../actions/bookActions';
import {connect} from 'react-redux'
import {bindActionCreators, dispatch} from 'redux';

class HomeTabScreenTwo extends React.Component {
	constructor(props) {
		super(props); 
	}
  render(){
  	const {bookApp, dispatch} = this.props;
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <AddBook
          goBack={ () => this.props.navigation.goBack() }
          {...bindActionCreators(bookActions, dispatch)}/>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  bookActions: () => dispatch(bookActions)
})

export default connect(mapDispatchToProps)(HomeTabScreenTwo)