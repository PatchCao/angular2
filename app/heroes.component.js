(function(app) {
  app.HeroesComponent =
    ng.core.Component({
      selector: 'my-heroes',
      templateUrl: 'app/heroes.component.html',
      styleUrls: ['app/heroes.component.css']
    })
    .Class({
      constructor: [app.HeroService, ng.router.Router, function(service, router) {
        this.heroes = service.getHeros();
        this.router = router;
        this.onSelect = function(hero) {
          this.selectedHero = hero;
        };
      }]
    });

  app.HeroesComponent.prototype.ngOnInit = function() {
    this.gotoDetail = function() {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
  }
})(window.app || (window.app = {}));
