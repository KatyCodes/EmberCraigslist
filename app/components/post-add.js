import Ember from 'ember';

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
        price: parseInt(this.get('price')),
        location: this.get('location'),
        date: this.get('date'),
      };
      this.set('addPostOpen', false);
      this.sendAction('saveNewPost2', params);
    }
  }
});
