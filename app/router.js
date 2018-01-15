import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todos', function() {
    this.route('new');
    this.route('edit', {path: 'edit/:edit_id'});
    this.route('remove', {path: 'remove/:remove_id'});
  });
});

export default Router;
