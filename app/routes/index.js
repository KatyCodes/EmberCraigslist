import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    saveNewPost3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
    },
    updatePost5(post, params) {
      console.log("Made it!");
    }
  }
});
