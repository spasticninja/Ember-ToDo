import Component from '@ember/component';

export default Component.extend({
  hasConfirmed: false,
  actions: {
    save: function(model) {
      model.save().then(() => {
        this.sendAction('handleRedirect');
      // }).then(() => {
      //   this.redirect();
      });
    },
    remove: function(model) {
      model.get('store').findRecord('todo', model.id).then((todo) => {
        todo.destroyRecord();
        this.sendAction('handleRedirect');
      // }).then(() => {
      //   this.redirect();
      });
    },
    confirm: function() {
      this.toggleProperty('hasConfirmed');
    }
  },
  redirect: function() {
    this.get('routing').transitionTo('todos');
  }
});
