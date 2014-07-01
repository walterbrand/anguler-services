angular.module('app', ['ui.router']);

angular.module('app').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('home', {
        url:'/',
        template :'<div>Ik ben de home pagina</div>'
    });
    $stateProvider.state('contact',{
        url:'/contact',
        template : '<div>Ik ben de contactpagina</div>'
    })
});

