import React, {Component} from 'react';
import {TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import {
	View, 
	Text,
	Button,
	Container
} from 'native-base'; 

export default class Header extends Component {
	static propTypes = {
    	addBook: PropTypes.func.isRequired
  	}
	render() {
		return(
			<View>
				<Text>Header</Text>
				
				<TouchableHighlight onPress={this.props.addBook}>
					<Text>Add</Text>
				</TouchableHighlight>
			</View>)
	}
}

