import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  routing: Ember.inject.service('-routing'),
  actions: {
    remove: function(model) {
      model.get('store').findRecord('todo', model.id).then((todo) => {
        todo.destroyRecord();
        console.log('Todo removed');
        this.sendAction('handleRedirect');
      });
    },
    back: function() {
      this.get('router').transitionTo(todos);
    }
  }
});
