(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [ 
                ng.platformBrowser.BrowserModule,
                ng.forms.FormsModule
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
