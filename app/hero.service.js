(function(app) {
    app.HeroService = function HeroService() {}

    app.HeroService.prototype = {
        message: 'hello',
        getHeroes: function() {
            return app.heroes;
        }
    };
})(window.app || (window.app = {}));
