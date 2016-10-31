import Ember from 'ember';

export default Ember.Component.extend({
  postUpdateOpen: false,
  actions: {
    openPostUpdate() {
      this.set('postUpdateOpen', true);
    },
    closePostUpdate() {
      this.set('postUpdateOpen', false);
    },
    updatePost1(post) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        title: this.get('title'),
        image: this.get('image'),
        price: this.get('price'),
        location: this.get('location'),
        date: moment().valueOf(),
      };
      this.set('postUpdateOpen', false);
      this.sendAction('updatePost2', post, params);

      this.set('author', "");
      this.set('content', "");
      this.set('title', "");
      this.set('image', "");
      this.set('price', "");
      this.set('location', "");
    }
  }
});
