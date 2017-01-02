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
          },
          {
            path: 'dashboard',
            component: app.DashboardComponent
          },
          {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
          }
        ])
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
