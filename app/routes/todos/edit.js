import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    return this.store.findRecord('todo', params.id);
  },
  actions: {
    displayTodos: function() {
      this.transitionTo('todos');
    }
  }
});
