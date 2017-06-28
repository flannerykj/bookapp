import * as types from './ActionTypes';
import fetch from 'isomorphic-fetch'

let nextBookId = 3

export function addBook(title, author) {
	console.log(title);
  return {
    type: types.ADD_BOOK,
    book: {
      id: nextBookId++,
      title: title,
      author: author
    }
  };
}

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(`https://facebook.github.io/react-native/movies.json`)
      .then((response) => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

export function requestPosts() {
  return {
    type: types.REQUEST_POSTS
  }
}

export function receivePosts(json) {
  console.log('JSON'); 
  console.log(json); 
  return {
    type: types.RECEIVE_POSTS,
    items: json.movies,
    receivedAt: Date.now()
  }
}