
import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types';
import {AsyncStorage} from 'react-native';

export default class AddBook extends React.Component {
 constructor(props) {
    super(props)
    this.state = {title: ''};
    AsyncStorage.getItem('title').then((text) => {
      this.setState({
        title: text
      })
    }); 
  }
  handleOnChange = (text) => {
    this.setState({title: text});
    AsyncStorage.setItem('title', text); 
    this.setState({title: text});

  }
    addTodo = () => {
	    this.props.addBook(this.state.title, 'author');
	    this.props.goBack(); 
	  }
  render(){
  	const {addBook, goBack} = this.props;
    return(
      <View> 
      	<Text>{ 'Add Book' }</Text>
        <TextInput
	        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
	        onChangeText={this.handleOnChange}
            value={this.state.title}
	      />
        
	     <TouchableOpacity
          onPress={ () => this.addTodo() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'purple',
            marginTop:20
          }}>
          <Text>{'Submit'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'purple',
            marginTop:20
          }}>
          <Text>{'Cancel'}</Text>
        </TouchableOpacity>

      </View>
      )
	}
}

AddBook.propTypes = {
	addBook: PropTypes.func.isRequired,
	goBack: PropTypes.func.isRequired
}
