(function(app) {
  app.HeroesComponent =
    ng.core.Component({
      selector: 'my-heroes',
      templateUrl: 'app/heroes.component.html',
      styleUrls: ['app/heroes.component.css']
    })
    .Class({
      constructor: [app.HeroService, function(service) {
        this.heroes = service.getHeros();
        this.onSelect = function(hero) {
          this.selectedHero = hero;
        };
      }]
    });
})(window.app || (window.app = {}));
