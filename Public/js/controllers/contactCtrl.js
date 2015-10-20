(function(){
    'use strict';

    angular
        .module("personal")
        .controller("Contact", Contact);

    function Contact(){
        var vm = this;
        vm.phone_number = "801-427-9518";
        vm.display_phone = false;
    }
})();
