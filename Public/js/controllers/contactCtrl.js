'use strict';
var app = angular.module("personal");
app.controller("Contact", function(){
    this.test = "Welcome to the Contact page.";
    this.phone_number = "801-427-9518";
    this.display_phone = false;
})