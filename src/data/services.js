import Realm from 'realm';
import BookModel from './models';

let repository = new Realm({
    schema: [{
	name: 'Book',
	primaryKey: 'id',
	properties: {
	    id: {type: 'string', indexed: true},
	    title: 'string',
	    author: 'string',
	    createdAt: 'date',
	    updatedAt: 'date'
	}
    }]
});

let BookService = {
  findAll: function(sortBy) {
    if (!sortBy) sortBy = [['author', false], ['updatedAt', true]];
    return repository.objects('Book').sorted(sortBy);
  },

  save: function(book) {
    if (repository.objects('Book').filtered("title = '" + book.title + "'").length) return;

    repository.write(() => {
      book.updatedAt = new Date();
      repository.create('Book', book);
    })
  },

  update: function(book, callback) {
    if (!callback) return;
    repository.write(() => {
      callback();
      book.updatedAt = new Date();
    });
  }
};


BookService.save(new BookModel('Tom Sawyer', 'MarkTwain'))

export default BookService;