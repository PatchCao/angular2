(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [
        ng.platformBrowser.BrowserModule,
        ng.forms.FormsModule,
        ng.router.RouterModule.forRoot([
          {
            path: 'heroes',
            component: app.HeroesComponent
          }
        ])
       ],
      declarations: [
        app.HeroDetailComponent,
        app.HeroesComponent,
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
