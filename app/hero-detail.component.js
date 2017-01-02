(function(app) {
  app.HeroDetailComponent =
    ng.core.Component({
      selector: 'my-hero-detail',
      inputs: ['hero'],
      templateUrl: 'app/hero-detail.component.html',
      styleUrls: ['app/hero-detail.component.css']
    })
    .Class({
      constructor: [app.HeroService, ng.router.ActivatedRoute, ng.common.Location, function(service, route, location) {
        this.heroService = service;
        this.route = route;
        this.location = location;
      }]
    });

  app.HeroDetailComponent.prototype.ngOnInit = function() {
    this.hero = this.heroService.getHero(this.route.params.value.id);
    this.goBack = function() {
      this.location.back();
    }
  };
})(window.app || (window.app = {}));
