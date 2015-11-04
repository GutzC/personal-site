(function(){
    'use strict';

    angular
        .module("personal")
        .controller("About", About)

    function About(){
        var vm = this;
        vm.history = [            
            {
                link : "../../img/uvu.png",
                description : "I initially graduated from Utah Valley University with a Bachelor of Science degree in Business Management, having an emphasis in Entrepreneurship. However, I returned to UVU a few years ago, and have been taking Computer Science classes part-time each evening. I love learning and have enjoyed having the freedom to pick classes that interest me versus pursuing a certificate."
            },
            {
                link : "../../img/fidelity-investments_200x200.jpg",
                description : "During the past eight years I have worked full-time in the Financial industry. My primary goals during this period were to learn how the financial markets work, learn how to manage my own finances, and then transition back into a career I am more passionate about. During this time, I was always a top performer, changing roles often to learn various aspects of the industry, and soaking up as much knowledge as I could. These goals have been achieved and it is now time to get back to an area more inline with my natural interests – software development."
            },
            {
                link : "../../img/devmtn860x860.png",
                description : "I made the jump into front-end development with both feet,completing an intensive full-time, three-month 'boot camp' at DevMountain, where I was able to sit down and code/learn 10-12 hours each day. It was awesome! The primary languages studied were related to the full MEAN stack, and helped open the door the many libraries, frameworks, and languages available in web development."
            },
            {
                link : "../../img/itg-logo.png",
                description : "The last sixth months have been a wonderful blur. ITG has provided me with my first real development job and I am loving it! My happiest times are when I can plug-in and get lost writing code. I have had the opportunity work with really great people and have recently completed my first full project, greatly deepening my knowledge and understanding of vanilla Javascript, AngularJS, and the various Sharepoint APIs."
            }
        ]
        vm.current = "I am so blessed to be a web developer! Digging AngularJS currently, but am like a kid in a candy store surrounded by all the web tooling/frameworks available right now. Most evenings you will find me working on personal projects as I dive deeper into Angular, D3, Gulp, React, Node, and a host of other tools.";
    }
})();
