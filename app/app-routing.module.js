(function(app) {
  app.RoutingModule =
   ng.core.NgModule({
     imports: [
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
         },
         {
           path: 'detail/:id',
           component: app.HeroDetailComponent
         }
       ])
     ],
     exports: [
       ng.router.RouterModule
     ]
   })
   .Class({
     constructor: function() {

     }
   });
})(window.app || (window.app = {}));
