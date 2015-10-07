(function(){
    'use strict';
    
    angular
        .module("personal")
        .controller("About", About)
        
    function About(){
        this.history = [
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
                description : "I have finally jumped into front-end development with both feet, recently completing an intensive full-time, three-month 'boot camp' at DevMountain, where I was able to sit down and code/learn 10-12 hours each day. It was awesome! The primary languages studied were related to the full MEAN stack, but I can't wait to pick up additional languages/technologies/practices in the future."
            }
        ]
        this.current = "I am a strong team player, great communicator, and will be an excellent addition to your organization.";
    }
})();