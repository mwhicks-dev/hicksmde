/*<![CDATA[*/

var app = angular.module( "login", ["nav", "ngCookies"] );
app.controller( "loginCtl", function( $scope, $http, $cookies ) {
    if (!!$cookies.get('token') && $cookies.get('token') !== '') {
        window.location.href = '/';
    }
    
    $scope.environment = {
        status_ok: true,
        msg: ''
    };

    $scope.data = {
        username: '',
        password: ''
    };

    $scope.resetFormData = function() {
        $scope.data.username = '';
        $scope.data.password = '';
        $scope.environment.status_ok = true;
    }

    $scope.login = function() {
        // Use HTTP to attempt login
        $http({
            method: 'GET',
            url: '/uri/pyacct'
        }).then(function responseCallback(response) {
            var uri = response.data;

            // POST PyAcct account
            $http({
                method: 'POST',
                url: uri + '/pyacct/2/session/',
                data: {
                    username: $scope.data.username,
                    password: $scope.data.password
                }
            }).then(function responseCallback(response) {
                $cookies.put('token', response.data.access_token)
                window.location.href = "/";
            }, $scope.errorCallback);
        }, function errorCallback(response) {
            $scope.environment.status_ok = false;
            $scope.environment.msg = "Invalid credentials.";
        });
    }

    $scope.ready = function() {
        return $scope.loginForm.username.$valid
            && $scope.loginForm.password.$valid;
    }

    $scope.signup = function() {
        window.location.replace("/signup");
    }
});

/*]]>*/