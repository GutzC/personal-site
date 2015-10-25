(function(){
    'use strict';

    angular
        .module("personal")
        .controller("Projects", Projects);

    function Projects(){
        var vm = this;
        vm.projects = [
            {
                name: "MACU Intranet - Home Page",
                screenshot: [{ image: "../../img/map-view.png", text: "Map View"}, {image: "../../img/list-view.png", text: "List View"}, { image: "../../img/list-view-add.png", text: "Add Billboard"}],
                repository: "#",
                languages: ["HTML", "CSS", "Bootstrap", "jQuery", "Angular.JS", "Sharepoint 2013"],
                text: "Worked with designers to add functionality to their mark-up."
            },
            {
                name: "LDS Billboards",
                screenshot: [{ image: "../../img/map-view.png", text: "Map View"}, {image: "../../img/list-view.png", text: "List View"}, { image: "../../img/list-view-add.png", text: "Add Billboard"}],
                repository: "https://github.com/GutzC/ldsbillboard",
                languages: ["HTML", "CSS", "Angular.JS", "Node/Express", "MongoDB"],
                text: "As our final group project at DevMountain, we contracted with the LDS Church to create a simple billboard tracking app. I lead a team of five to create this app, coordinating workflows, providing direction, and encouraging communication. We used the full MEAN stack, along with the Angular Google Maps API."
            },
            {
                name: "SmitePantheon (in-progress)",
                screenshot: [{image: "../../img/sp-home.png", text: "Smite Pantheon"}, {image: "../../img/sp-gods.png", text: "God Information"}, { image: "../../img/sp-player-history.png", text: "Player History"}],
                repository: "https://github.com/GutzC/SmitePantheon",
                languages: ["HTML", "CSS", "Angular.JS", "Node/Express"],
                text: "A simple fan site for one of my favorite games, Smite. I created this project as a method to practice the languages I learned during my time at DevMountain. The project is a work-in-progress, but allowed me to play around with a couple of really interesting API's."
            },
            {
                name: "Rocket Math (in-progress)",
                screenshot: [{ image: "../../img/rm-register.png", text: "Registration"}, { image: "../../img/rm-add.png", text: "Addition"}, { image: "../../img/rm-incorrect.png", text: "Incorrect Answer"}],
                repository: "https://github.com/GutzC/rocketmath",
                languages: ["HTML", "CSS", "Angular.JS", "Firebase"],
                text: "A simple flashcard game for kids. Generates random flash cards, allowing Addition, Subtraction, Multiplication, and Division game modes."
            }
        ]

        vm.myInterval = 4000;
    }
})();
