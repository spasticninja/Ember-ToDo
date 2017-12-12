import Component from '@ember/component';

export default Component.extend({
  routing: Ember.inject.service('-routing'),
  actions: {
    save: function(model) {
      model.save().then(() => {
        console.log('Todo Saved');
        this.sendAction('handleRedirect');
      }).then(() => {
        this.redirect();
      });
    }
  },
  redirect: function() {
    this.get('routing').transitionTo('todos');
  }
});
