'use strict';
var app = angular.module("personal", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "./../views/home.html",
            controllerAs: "home",
            controller: "Home"
        })
        .when("/about", {
            templateUrl: "./../views/about.html",
            controllerAs: "about",
            controller: "About"
        })
        .otherwise({
            redirectTo: "/"
        })
})