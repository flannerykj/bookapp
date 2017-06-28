import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

import {
	View, 
	Text,
	Button
} from 'native-base'; 
import BookPreview from './BookPreview';

export default class BookList extends Component {
	render() {
		console.log('this.props'); 
		console.log(this.props); 
		return(
			<View>
				{this.props.books.map( book => 
				<BookPreview key={book.id} book={book}/>
					)}
				
			</View>)
	}
}

BookList.propTypes = {
	books: PropTypes.array.isRequired
}