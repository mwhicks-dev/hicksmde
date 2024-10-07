/*<![CDATA[*/

var app = angular.module("project", ["nav"]);
app.controller("projectCtl", function($scope, $http) {
    $scope.projects = $scope.getProjects();

    $scope.getProjectId = function() {
        var url = window.location.href;
        var splitUrl = url.split('/');
        var final = splitUrl[splitUrl.length - 1];
        return final.includes('?') 
            ? final.substring(0, final.indexOf('?'))
            : final;
    };

    $scope.getProjectById = function(id) {
        for (let i = 0; i < $scope.projects.length; i++) {
            if ($scope.projects[i].id === id) return $scope.projects[i];
        }

        return {
            title: 'Not Found',
            longDescription: 'No project with ID ' + id + ' found'
        };
    };

    $scope.separateByNewline = function(content) {
        return content.split('\n');
    };

    $scope.formatContent = function(content) {
        var split_content = content.split('\n');
        var joined_str = '';
        for (let i = 0; i < split_content.length; i++) {
            joined_str += '<p>' + split_content[i] + '</p>';
        }

        return joined_str;
    }

    $scope.project = $scope.getProjectById($scope.getProjectId());

    document.getElementById('post_body').innerHTML 
        = $scope.project.longDescription;
});

/*]]>*/