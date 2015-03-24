'use strict';
var app = angular.module("personal", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "./../views/home.html",
            controller: "main"
        })
        .otherwise({
            redirectTo: "/"
        })
})