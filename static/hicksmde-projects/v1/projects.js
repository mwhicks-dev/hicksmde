/*<![CDATA[*/

var app = angular.module("projects", ["nav", "project"]);
app.controller("projectsCtl", function($scope, $http) {
    // TODO: Retrieve via HTTP later
    $scope.getProjects = function() {
        return [
            {
                id: '6b5ec57d-236c-4552-af71-20e4a42ed009',
                title: 'Portfolio Website',
                stack: [
                    "Python",
                    "FastAPI",
                    "AWS",
                    "SQLAlchemy",
                    "Docker",
                    "AngularJS",
                    "JavaScript",
                    "HTML",
                    "CSS",
                ],
                url: 'http://34.226.123.156/',
                related: ['https://github.com/mwhicks-dev/hicksmde-mapping', 'https://github.com/mwhicks-dev/pyacct'],
                shortDescription: 'My portfolio website and web server.',
                longDescription: "<p>The website you're looking at! Up until recently, my old web server was pretty shabby, so I decided to spend some time between job applications to overhaul it. I'm no web developer, so I'm using AngularJS for the front-end, but my web server and the microservice it is connected to are all made from scratch in Python and deployed in Python.</p><p>For more details about this and my other projects, you should check my <a href='/blog'>blog</a>"
            },
            {
                id: '47702955-e1c7-41bb-81f0-643f83cc187b',
                title: 'PyAcct',
                stack: [
                    "Python",
                    "FastAPI",
                    "SQLAlchemy",
                    "Pydantic",
                ],
                url: 'https://github.com/mwhicks-dev/pyacct',
                shortDescription: 'Account management service written in Python.',
                longDescription: "<p>Very often, an account system is needed for modern software projects and web solutions. PyAcct is an effort to, like other similar software, modularize this protocol so that it is repeatable and available.</p><p>I implemented this small back-end utility to provide a flexible, RESTful method of account management and authentication, with the goal of allowing for users to extend upon it freely; given the correct authentication, PyAcct allows for an account's unique integer ID and username to be retrieved so that they can be used in (more or less) join tables, although not so strongly connected.</p><p>The important part is that if you want to associate more data to an account, like an email or profile picture, you can use the same account ID.</p>"
            }
        ];
    }

    $scope.redirectToProject = function(id) {
        window.location.href = '/project/' + id;
    }

    $scope.formatStack = function(stack) {
        var output = '';
        for (let i = 0; i < stack.length; i++) {
            output += stack[i];
            output += i == stack.length - 1
                ? ''
                : ', ';
        }

        return output;
    }

    $scope.projects = $scope.getProjects();
});

/*]]>*/