(function(){
    'use strict';
    angular
        .module("personal")
        .controller("Resume", Resume);
        
    function Resume(){
        this.test = "Welcome to the Resume page.";
    }
})();