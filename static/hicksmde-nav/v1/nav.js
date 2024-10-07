var app = angular.module("nav", ['ngCookies']);
app.controller("navCtl", function($scope, $cookies) {
    if (!!$cookies.get('token') && $cookies.get('token') !== '') {
        $scope.ref = '/logout';
        $scope.txt = 'Log Out';
    } else {
        $scope.ref = '/login';
        $scope.txt = 'Log In';
    }
});