import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    return this.store.findRecord('todo', params.id, { backgroundReload: false }).then((todo) => {
      todo.destroyRecord();
    });
  },
  actions: {
    displayTodos: function() {
      this.transitionTo('todos');
    }
  }
});
