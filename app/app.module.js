(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [
        ng.platformBrowser.BrowserModule,
        ng.forms.FormsModule,
        app.RoutingModule
       ],
      declarations: [
        app.HeroDetailComponent,
        app.HeroesComponent,
        app.DashboardComponent,
        app.AppComponent
       ],
       providers: [
         app.HeroService
       ],
      bootstrap: [
        app.AppComponent
       ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
