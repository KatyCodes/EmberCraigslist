import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addPostOpen: false,
  actions: {
    openPostAdd() {
      this.set('addPostOpen', true);
    },
    closePostAdd() {
      this.set('addPostOpen', false);
    },
    saveNewPost1 () {
      var params ={
        author: this.get('author'),
        content: this.get('content'),
        title: this.get('title'),
        image: this.get('image'),
        price: this.get('price'),
        location: this.get('location'),
        date: moment().valueOf(),
      };
      if(params.author && params.content && params.title && params.image && params.price && params.location) {
        this.set('addPostOpen', false);
        this.sendAction('saveNewPost2', params);
      }
      else {
        alert("All fields are required to submit a new post.");
      }
      this.set('author', "");
      this.set('content', "");
      this.set('title', "");
      this.set('image', "");
      this.set('price', "");
      this.set('location', "");
    },
  }
});
