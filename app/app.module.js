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
            path: 'dashborad',
            component: app.DashboardComponent
          },
          {
            path: '',
            redirectTo: '/dashborad',
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
