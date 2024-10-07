/*<![CDATA[*/

var app = angular.module( "resume", ["nav"] );
app.controller( "resumeCtl", function( $scope, $http ) {
    $scope.formatSkills = function(items) {
        var output = '';
        for (let i = 0; i < items.length; i++) {
            output += items[i];
            output += i == items.length - 1
                ? ''
                : ', ';
        }

        return output;
    }

    // TODO: Get all this from HTTP later
    $scope.edu = [
        {
            name: "North Carolina State University",
            time: "May 2024",
            title: "Bachelor of Science in Computer Science",
            award: "Minor in Mathematics"
        }
    ];

    $scope.skills = [
        {
            label: "Languages",
            items: [
                "Python",
                "Java",
                "C++",
                "C#",
                ".NET",
                "C",
                "PostgreSQL",
                "MySQL",
                "JavaScript",
            ]
        },
        {
            label: "Frameworks",
            items: [
                "FastAPI",
                "JUnit",
                "Spring Boot",
                "AngularJS",
                "PyTest",
                "GoogleTest",
                "xUnit",
            ]
        },
        {
            label: "Developer Tools",
            items: [
                "Git",
                "Docker",
                "Maven",
                "Make",
                "Visual Studio",
                "CMake",
                "VMWare",
                "Amazon Web Services",
                "Google Cloud Platform",
            ]
        }
    ];

    $scope.contact = [
        {
            key: "Email",
            value: "mason@hicksm.dev"
        },
        {
            key: "LinkedIn",
            value: "linkedin.com/in/mwhicks"
        },
        {
            key: "GitHub",
            value: "github.com/mwhicks-dev"
        }
    ];

    $scope.work = [
        {
            title: "Senior Design Intern",
            stack: "React Native, Python + .NET, PostgreSQL",
            company: "Quantryd",
            time: "Jan 2024 - May 2024",
            responsibilities: [
                "Approached need for scalable, decoupled digital advertisement platform by designing a system of microservices to be containerized in Docker for swift deployment, as successfully displayed in a live technical demonstration",
                "Led development, testing, and maintenance of the middleware and database configurations used in the system's prototype resulting in 90% overall test coverage and 100% test success within each back-end component",
                "Delivered completed services to shareholders, each strongly tested and thoroughly documented, by utilizing month-long Agile sprints during which time an end-to-end deliverable was designed, tested, and packaged"
            ]
        },
        {
            title: "Undergraduate Researcher",
            stack: "C++",
            company: "North Carolina State University",
            time: "May 2022 - Dec 2023",
            responsibilities: [
                "Studied modern graph algorithms and literature on the dominating set problem, an NP-hard probably in graph theory, in order to optimize techniques for set generation",
                "Validated complex solution strategies by hand on small problem instances in order to find what graph characteristics cooperate well with particular algorithms",
                "Implemented strategies within a research software tool used to find minimum independent dominating set",
                "Recorded and organized thousands of data records comparing newly implemented strategies with those existing, finding an average decreased runtime of 50% over next best configuration"
            ]
        },
        {
            title: "Cloud Research & Development Intern",
            stack: "Python, GraphQL",
            company: "Renaissance Computing Institute",
            time: "Nov 2020 - May 2022",
            responsibilities: [
                "Automated testing and quality assurance workflows for Chameleon Cloud's client-side codebase",
                "Developed driver code for Amazon Web Services' public API for enterprise use, as well as both client-side and server-side code on multiple clouds owned or partially managed by RENCI",
                "Created the framework for automated generation of client-interfacing code documentation as used by users and developers of the FABRIC networking testbed"
            ]
        }
    ];
});

/*]]>*/