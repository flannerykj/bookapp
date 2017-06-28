import React, {Component} from 'react'; 
import {View, Text, TouchableOpacity, TouchableHighlight} from 'react-native'; 
import PropTypes from 'prop-types'
import Header from '../../../components/Header'; 
import BookList from '../../../components/BookList';
import * as bookActions from '../../../actions/bookActions';
import {connect} from 'react-redux'
import {bindActionCreators, dispatch} from 'redux';
//import OmniBox from '../../../components/OmniBox'

class HomeTabScreenOne extends Component {
	componentWillMount() {
	 const newBooks = this.props.fetchPosts();
	 console.log(newBooks);
	}
	render() {
		return (
			<View>
				<TouchableOpacity
		          onPress={ () => this.props.navigation.navigate('HomeTabScreenTwo') }
		          style={{
		            padding:20,
		            borderRadius:20,
		            backgroundColor:'green',
		            marginTop:20
		          }}>
		          <Text>Add Book</Text>
		        </TouchableOpacity>
				<Text>Fetch Books</Text> 
				<BookList {...this.props}/> 
				
			</View>
			)
	}
}

const mapStateToProps = state => {
  return {
    books: state.bookApp.books

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(bookActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeTabScreenOne)

