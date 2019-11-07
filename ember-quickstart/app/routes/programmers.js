import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Programmer 1', 'Programmer 2', 'Programmer 3'];
  }
});
