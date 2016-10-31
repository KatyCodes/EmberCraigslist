import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    updatePost5(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
    },
    savePost5(params) {
      var newPost = this.store.createRecord('post', params);
      var post = params.post;
      post.get('answers').addObject(newPost);
      newPost.save().then(function() {
        return post.save();
      });
    }
  }
});
