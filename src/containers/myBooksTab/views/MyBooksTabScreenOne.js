'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class MyBooksTabScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'My Books Tab - Screen One' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('MyBooksTabScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'green',
            marginTop:20
          }}>
          <Text>{'Go to next screen this tab'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

