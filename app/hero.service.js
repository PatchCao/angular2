(function(app) {
  app.HeroService = ng.core.Injectable().Class({
    constructor: function() {
      this.title = 'Tour of Heroes';
      this.getHeros = function() {
        return app.Heroes;
      }
    }
  });
})(window.app || (window.app = {}));
