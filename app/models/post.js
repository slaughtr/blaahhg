import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  imgURL: DS.attr(),
  body: DS.attr(),
  timestamp: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  comments: DS.hasMany('comment', {async: true}),
  favorite: DS.hasMany('user', {async: true})
});
