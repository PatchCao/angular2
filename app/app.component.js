(function(app) {
    app.AppComponent = 
        ng.core.Component({
            selector: 'my-app',
            template: `
                <h1>{{title}}</h1>
                <my-heroes></my-heroes>
            `
        })
        .Class({
            constructor: function() {
                this.title = 'Tour of Heroes';
            }
        });
})(window.app || (window.app = {}));
