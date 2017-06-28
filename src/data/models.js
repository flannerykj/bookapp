import Utils from '../lib/utils';

class BookModel {
  constructor(title, author) {
    this.id = Utils.guid();
    this.title = title;
    this.author = author;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export default BookModel