import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  title: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  location: DS.attr(),
  date: DS.attr()
});
