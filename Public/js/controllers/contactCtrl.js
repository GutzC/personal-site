(function(){
    'use strict';
    
    angular
        .module("personal")
        .controller("Contact", Contact);
        
    function Contact(){
        this.test = "Welcome to the Contact page.";
        this.phone_number = "801-427-9518";
        this.display_phone = false;
    }
})();