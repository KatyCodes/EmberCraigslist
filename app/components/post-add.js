import Ember from 'ember';

export default Ember.Component.extend({
  addPostOpen: false,
  actions: {
    openPostAdd() {
      this.set('addPostOpen', true);
    },
    closePostAdd() {
      this.set('addPostOpen', false);
    }
  }
});
