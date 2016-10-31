import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost1(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('deletePost2', post);
      }
    }
  }
});
