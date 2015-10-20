(function(){
    'use strict';

	angular
        .module("personal")
        .config(config);

        angular.$inject()     

    function config($routeProvider){
        $routeProvider
            .when("/home", {
                templateUrl: "./../views/home.html",
                controllerAs: "home",
                controller: "Home"
            })
            .when("/about", {
                templateUrl: "./../views/about.html",
                controllerAs: "about",
                controller: "About"
            })
            .when("/projects", {
                templateUrl: "./../views/projects.html",
                controllerAs: "projects",
                controller: "Projects"
            })
            .when("/resume", {
                templateUrl: "./../views/resume.html",
                controllerAs: "resume",
                controller: "Resume"
            })
            .when("/contact", {
                templateUrl: "./../views/contact.html",
                controllerAs: "contact",
                controller: "Contact"
            })
            .otherwise({
                redirectTo: "/home"
            })
    }
})();
