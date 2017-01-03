(function(app) {
  app.DashboardComponent =
    ng.core.Component({
      selector: 'my-dashboard',
      templateUrl: 'app/dashboard.component.html',
      styleUrls: ['app/dashboard.component.css']
    })
    .Class({
      constructor: [app.HeroService, function(service) {
        this.heroService = service;
      }]
    });

  app.DashboardComponent.prototype.ngOnInit = function() {
    this.heroes = this.heroService.getHeros().slice(1, 5);
  }
})(window.app || (window.app = {}));
