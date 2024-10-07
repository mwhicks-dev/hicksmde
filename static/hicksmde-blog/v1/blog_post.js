/*<![CDATA[*/

var app = angular.module("blogPost", ["nav"]);
app.controller("blogPostCtl", function($scope, $http) {
    $scope.posts = $scope.getPosts();

    $scope.getPostId = function() {
        var url = window.location.href;
        var splitUrl = url.split('/');
        var final = splitUrl[splitUrl.length - 1];
        return final.includes('?') 
            ? final.substring(0, final.indexOf('?'))
            : final;
    };

    $scope.getPostById = function(id) {
        for (let i = 0; i < $scope.posts.length; i++) {
            if ($scope.posts[i].id === id) return $scope.posts[i];
        }

        return {
            title: 'Not Found',
            date: [2024, 8, 30],
            content: 'No post with ID ' + id + ' found'
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

    $scope.post = $scope.getPostById($scope.getPostId());

    document.getElementById('post_body').innerHTML 
        = $scope.formatContent($scope.post.content);
});

/*]]>*/