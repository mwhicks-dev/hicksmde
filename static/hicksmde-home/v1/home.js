/*<![CDATA[*/

var app = angular.module( "home", ["nav"] );
app.controller( "homeCtl", function( $scope, $http ) {
    $scope.content = {
        head: "Mason Hicks",
        body: [
            "Hi - I'm Mason, a backend developer interested in creating scalable platforms for quantitative development and machine learning applications. I'm currently unemployed and looking for entry-level backend work as an initial step of gaining experience towards my long-term goal of software architect.",
            "Off the computer, I spend a lot of my time on fitness or with my partner. Right now I run, lift weights, and rock climb, but I have also been getting into biking."
        ]
    };  // TODO: Get this with HTTP later
});

/*]]>*/