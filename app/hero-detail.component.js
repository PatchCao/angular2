(function(app) {
  app.HeroDetailComponent =
    ng.core.Component({
      selector: 'my-hero-detail',
      inputs: ['hero'],
      templateUrl: 'app/hero-detail.component.html'
    })
    .Class({
      constructor: function() {

      }
    });
})(window.app || (window.app = {}));
