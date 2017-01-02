(function(app) {
  app.HeroService = ng.core.Injectable().Class({
    constructor: function() {
      this.getHeros = function() {
        return app.Heroes;
      };

      this.getHero = function(id) {
        return app.Heroes.find(function(hero) {
          return hero.id == id;
        });
      }
    }
  });
})(window.app || (window.app = {}));
