import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePost3(post, params) {
      this.sendAction('updatePost4', post, params);
    },
    deletePost3(post) {
      this.sendAction('deletePost4', post);
    }
  }
});
